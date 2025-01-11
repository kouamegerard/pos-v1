/*
  Warnings:

  - Added the required column `price` to the `Command` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Command" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "complete" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL DEFAULT 'COOKED',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Command" ("complete", "createdAt", "id", "status", "title", "updatedAt") SELECT "complete", "createdAt", "id", "status", "title", "updatedAt" FROM "Command";
DROP TABLE "Command";
ALTER TABLE "new_Command" RENAME TO "Command";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
