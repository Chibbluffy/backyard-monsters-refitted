import { Migration } from '@mikro-orm/migrations';

export class Migration20251110000000 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "attack_logs" alter column "attackreport" type text using "attackreport"::text;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "attack_logs" alter column "attackreport" type jsonb using "attackreport"::jsonb;');
  }

}