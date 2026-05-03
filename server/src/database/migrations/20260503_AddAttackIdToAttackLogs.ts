import { Migration } from "@mikro-orm/migrations";

export class Migration20260503_AddAttackIdToAttackLogs extends Migration {
  async up(): Promise<void> {
    await this.execute(`
      ALTER TABLE bym.attack_logs
      ADD COLUMN IF NOT EXISTS attackid integer
    `);
  }
}
