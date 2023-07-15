<?php

namespace App\Models;

use CodeIgniter\Model;

class PesananModel extends Model
{
    protected $table = "t_pesanan";
    protected $primaryKey = "no_pesanan";

    protected $useAutoIncrement = false;

    protected $allowedFields = ['no_pesanan', 'tanggal', 'nm_supplier', 'nm_produk', 'total'];
}
