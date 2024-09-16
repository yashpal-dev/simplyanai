import crypto from "crypto";
import fs from "fs/promises";
import * as mime from "mime-types";
import { supportedFileType } from "@/enum";

export function getIp(ips: string) {
  const ip = ips ? ips.split(",")[0].trim() : "";

  return ip;
}

export function hashIp(ip: string, algorithm = "md5") {
  const hash = crypto.createHash(algorithm);
  console.log("IP Address", ip);
  hash.update(ip);
  return hash.digest("hex");
}

export function createFileId(
  hashedIp: string | undefined,
  fileName: string,
  index: number
) {
  const fileId = hashedIp + fileName + index;
  return fileId;
}

export async function checkIfFileExists(filePath: string) {
  try {
    await fs.access(filePath);
    return true;
  } catch (error) {
    return false;
  }
}

export function supportedFileFormat(fileName: string) {
  const fileType = mime.lookup(fileName);
  if (supportedFileType.indexOf(fileType) === -1) return false;
  return true;
}
