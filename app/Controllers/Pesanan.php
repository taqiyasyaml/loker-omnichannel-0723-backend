<?php

namespace App\Controllers;

use \CodeIgniter\Config\Services;
use App\Models\PesananModel;

class Pesanan extends BaseController
{
    public function create()
    {
        if ($this->request->getHeaderLine('content-type') != 'application/json')
            return $this->response->setStatusCode(404);
        $data = $this->request->getJSON(true);
        $validation = Services::validation();
        $validation->setRule('no_pesanan', 'No Pesanan', 'required|max_length[20]|is_unique[t_pesanan.no_pesanan]');
        $validation->setRule('tanggal', 'Tanggal', 'required|valid_date[Y-m-d]');
        $validation->setRule('nm_supplier', 'Nama Supplier', 'required|max_length[50]');
        $validation->setRule('nm_produk', 'Nama Produk', 'required|max_length[50]');
        $validation->setRule('total', 'Total', 'required|decimal|greater_than[0]');
        if ($validation->run($data)) {
            try {
                //code...
                $model = new PesananModel();
                $model->insert($data);
                return $this->response->setStatusCode(201)->setJSON(["data" => $data]);
            } catch (\Throwable $th) {
                // return throw $th;
                return $this->response->setStatusCode(500)->setJSON(["data" => null]);
            }
        } else {
            return $this->response->setStatusCode(400)->setJSON([
                "data" => $validation->getErrors()
            ]);
        }
    }
}
