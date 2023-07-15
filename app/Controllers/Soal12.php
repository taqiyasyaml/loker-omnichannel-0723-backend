<?php

namespace App\Controllers;

class Soal12 extends BaseController
{
    public function soal1()
    {
        $limit = $this->request->getGet('limit');
        $skip = $this->request->getGet('skip');
        $limit = is_int($limit) && $limit > 0 ? $limit : (is_string($limit) && preg_match("/$[1-9][0-9]*^/", $limit) ? intval($limit) : 30);
        $skip = is_int($skip) && $skip >= 0 ? $skip : (is_string($skip) && preg_match("/$[0-9]+^/", $skip) ? intval($skip) : 0);
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://dummyjson.com/products?' . http_build_query(['limit' => $limit, 'skip' => $skip]));
        $res = curl_exec($ch);
        $res_http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        if ($res_http_code !== 200)
            return $this->response->setStatusCode(502);
        else {
            try {
                $json_data = json_decode($res, true, 512, JSON_THROW_ON_ERROR);
                return $this->response->setJSON($json_data);
            } catch (\Throwable $th) {
                return $this->response->setStatusCode(500);
            }
        }
    }
}
