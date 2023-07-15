<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateTPesananTable extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'no_pesanan' => [
                'type' => 'VARCHAR',
                'constraint' => 20,
                'unique' => true
            ],
            'tanggal' => [
                'type' => 'DATETIME',
            ],
            'nm_supplier' => [
                'type' => 'VARCHAR',
                'constraint' => 50,
                'default' => ''
            ],
            'nm_produk' => [
                'type' => 'VARCHAR',
                'constraint' => 50,
                'default' => ''
            ],
            'total' => [
                'type' => 'FLOAT',
                'default' => 0
            ],
        ]);
        $this->forge->addPrimaryKey('no_pesanan');
        $this->forge->createTable('t_pesanan');
    }

    public function down()
    {
        //
        $this->forge->dropTable('t_pesanan');
    }
}
