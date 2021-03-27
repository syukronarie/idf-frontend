import "../assets/scss/globals.scss";

import { Fragment } from "react";

import GlobalStyles from "@styles/globalStyles";

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
		<>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
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
