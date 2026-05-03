import { Migration } from "@mikro-orm/migrations";

export class Migration20260503_FixAttackreportColumnType extends Migration {
  async up(): Promise<void> {
    await this.execute(`
      ALTER TABLE bym.save
      ALTER COLUMN attackreport TYPE jsonb
      USING CASE
        WHEN attackreport IS NULL OR attackreport = '' THEN NULL
        WHEN attackreport ~ '^\\s*[\\[{]' THEN attackreport::jsonb
        ELSE NULL
      END
    `);
  }
}
