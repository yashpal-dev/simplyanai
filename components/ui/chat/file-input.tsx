import { Input } from "@/components/ui/input";
import { FilePlus, Loader2, CheckCircle, Upload } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { uploadPDF } from "@/services/chat";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import * as mime from "mime-types";
import { supportedFileType } from "@/enum";

type FileInput = {
  file: File | undefined;
  setFile: (file: any) => void;
  handleInputVisibility: (bool: boolean) => void;
  handleFileRemove: () => void;
};

export function FileInput({
  file,
  setFile,
  handleInputVisibility,
  handleFileRemove,
}: FileInput) {
  const [uploading, setUploading] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const { toast } = useToast();

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.files) return;

    const fl = e.currentTarget.files[0];
    const flType = mime.lookup(fl.name);

    if (supportedFileType.indexOf(flType) === -1) {
      toast({
        title: "File type not supported",
        description: "Please upload PDF or TXT files only.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    setUploading(0);

    const formData = new FormData();
    formData.append("file", fl);

    try {
      const res = await uploadPDF(formData, {
        onUploadProgress: (progress: any) => {
          const percentCompleted = Math.round(
            (progress.loaded * 100) / progress.total
          );
          setUploading(percentCompleted);
        },
      });

      if (res.data.success === true) {
        setFile(fl);
        setUploading(0);
        setIsUploading(false);
        handleInputVisibility(true);

        toast({
          title: "File Uploaded Successfully",
          description:
            "You can now start asking questions about your document.",
        });
      } else {
        setFile(null);
        setUploading(0);
        setIsUploading(false);

        toast({
          title: "Upload Failed",
          description: res.data.error || "Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      setFile(null);
      setUploading(0);
      setIsUploading(false);

      toast({
        title: "Upload Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="w-full h-48 border-2 border-dashed border-border/50 rounded-lg hover:border-primary/50 transition-colors duration-300">
        {!file && !isUploading ? (
          <label htmlFor="upload-doc" className="cursor-pointer">
            <Input
              type="file"
              accept=".pdf,.txt"
              id="upload-doc"
              className="hidden"
              onChange={handleFile}
            />
            <div className="h-full flex flex-col items-center justify-center gap-4 p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <FilePlus className="w-6 h-6 text-primary" />
              </div>
              <div className="text-center space-y-2">
                <p className="text-sm font-medium text-foreground">
                  Drop your file here
                </p>
                <p className="text-xs text-muted-foreground">
                  PDF or TXT files only
                </p>
              </div>
            </div>
          </label>
        ) : isUploading ? (
          <div className="h-full flex flex-col items-center justify-center gap-4 p-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Loader2 className="w-6 h-6 text-primary animate-spin" />
            </div>
            <div className="w-full space-y-3">
              <div className="text-center">
                <p className="text-sm font-medium text-foreground">
                  Uploading...
                </p>
                <p className="text-xs text-muted-foreground">
                  {uploading}% complete
                </p>
              </div>
              <Progress value={uploading} className="h-2" />
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center gap-4 p-6">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-center space-y-2">
              <p className="text-sm font-medium text-foreground">
                File Uploaded
              </p>
              <p className="text-xs text-muted-foreground truncate max-w-full">
                {file?.name}
              </p>
            </div>
            <Button
              onClick={handleFileRemove}
              variant="outline"
              size="sm"
              className="hover:bg-destructive/10 hover:text-destructive hover:border-destructive/50"
            >
              Remove File
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
