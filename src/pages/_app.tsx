import "../assets/scss/globals.scss";

import Head from "next/head";
import React from "react";
import GlobalStyles from "src/assets/styles/globalStyles";

/**
 * TODO : Pages implementing
 * 1. Profile
 * 2. Pendaftaran Online
 * 3. Info loker
 * 4. Testimoni
 * 5. Alamat / kontak
 */

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>
          Indonesia Dirgantara Flight — Lembaga Pendidikan Pramugari/Pramugara
        </title>
        <meta
          name='title'
          content='Indonesia Dirgantara Flight
— Lembaga Pendidikan Pramugari/Pramugara'
        />
        <meta
          name='description'
          content='Indonesia Dirgantara Flight (IDF) adalah Lembaga Pendidikan Staff Airlines dan Kepramugarian yang merupakan wujud peran serta tanggung jawab dalam usaha mencerdaskan kehidupan bangsa.'
        />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://indonesiadirgantaraflight.or.id/'
        />
        <meta
          property='og:title'
          content='Indonesia Dirgantara Flight
— Lembaga Pendidikan Pramugari/Pramugara'
        />
        <meta
          property='og:description'
          content='Indonesia Dirgantara Flight (IDF) adalah Lembaga Pendidikan Staff Airlines dan Kepramugarian yang merupakan wujud peran serta tanggung jawab dalam usaha mencerdaskan kehidupan bangsa.'
        />
        <meta property='og:image' content='' />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://indonesiadirgantaraflight.or.id/'
        />
        <meta
          property='twitter:title'
          content='Indonesia Dirgantara Flight
— Lembaga Pendidikan Pramugari/Pramugara'
        />
        <meta
          property='twitter:description'
          content='Indonesia Dirgantara Flight (IDF) adalah Lembaga Pendidikan Staff Airlines dan Kepramugarian yang merupakan wujud peran serta tanggung jawab dalam usaha mencerdaskan kehidupan bangsa.'
        />
        <meta property='twitter:image' content='' />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-199916643-1"></script>
        <script dangerouslySetInnerHTML={{__html:`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-199916643-1');
            
        `}} />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;

/*
Kontent yang dibutuhkan:

*Pointer:*
*Indonesia Dirgantara Flight atau disingkat IDF*

1. Profil / Profile
--- Penjelasan tentang IDF
--- Apa, Siapa, Kenapa IDF?
--- Pencapaian IDF dari mulai berdiri sampai sekarang
--- Tambahan konten: Penjelasan kelebihan jika bergabung / belajar di IDF

2. Pendaftaran / Registration
--- Syarat mendaftar program di IDF
--- Apa saja variabel yang harus diisi pada form pendaftaran.
--- contoh:
--- Nama Lengkap:
--- Jenis Kelamin:
--- No Hp:
--- Alamat: 
--- Pendidikan Terakhir:
--- Dst.

3. Info Loker / Career
--- Informasi Lowongan Pekerjaan

4. Testimoni
--- Review / testimoni dari student atau siapapun tentang IDF
--- Catatan quotes dan bisa diberikan Foto

5. Kontak / Contact
--- Email IDF 
--- No HP / No HP (WA) / Telephone

*/
