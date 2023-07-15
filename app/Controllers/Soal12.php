<?php

namespace App\Controllers;

class Soal12 extends BaseController
{
    public function soal2($id)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://dummyjson.com/products/' . urlencode($id));
        $res = curl_exec($ch);
        $res_http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        if ($res_http_code !== 200 && $res_http_code !== 404)
            return $this->response->setStatusCode(502);
        else {
            try {
                $json_data = json_decode($res, true, 512, JSON_THROW_ON_ERROR);
                return $this->response->setStatusCode($res_http_code)->setJSON($json_data);
            } catch (\Throwable $th) {
                return $this->response->setStatusCode(500);
            }
        }
    }
}
