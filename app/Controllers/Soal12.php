<?php

namespace App\Controllers;

use Config\Services;

class Soal12 extends BaseController
{
    public function soal2($id)
    {
        $client = Services::curlrequest();
        $res = $client->get('https://dummyjson.com/products/' . urlencode($id));
        $res_http_code = $res->getStatusCode();
        if ($res_http_code !== 200 && $res_http_code !== 404)
            return $this->response->setStatusCode(502);
        else {
            try {
                $json_data = json_decode($res->getBody(), true, 512, JSON_THROW_ON_ERROR);
                return $this->response->setStatusCode($res_http_code)->setJSON($json_data, false);
            } catch (\Throwable $th) {
                return $this->response->setStatusCode(500);
            }
        }
    }
}
