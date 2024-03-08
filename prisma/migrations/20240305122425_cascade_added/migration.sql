-- DropForeignKey
ALTER TABLE "Tweet" DROP CONSTRAINT "Tweet_userid_fkey";

-- AddForeignKey
ALTER TABLE "Tweet" ADD CONSTRAINT "Tweet_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
