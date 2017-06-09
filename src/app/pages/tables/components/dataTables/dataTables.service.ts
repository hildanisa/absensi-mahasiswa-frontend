import {Injectable} from '@angular/core';

@Injectable()
export class DataTablesService {

  dataTableData = [{
        'name': 'Wing',
        'email': 'tellus.eu.augue@arcu.com',
        'date': '2016-01-09',
        'nim': 131423001,
        'Kelas': '2A-D3',
		'sakit': 5,
		'izin': 9,
		'alpa': 1
    },
    {
        'name': 'Whitney',
        'email': 'sed.dictum@Donec.org',
        'date': '2017-01-23',
        'nim': 131423002,
        'Kelas': '2A-D3',
		'sakit': 5,
		'izin': 9,
		'alpa': 1
    },
    {
        'name': 'Oliver',
        'email': 'mauris@Craslorem.ca',
        'date': '2015-11-19',
        'nim': 131423005,
        'Kelas': '2A-D3',
		'sakit': 5,
		'izin': 9,
		'alpa': 1
    },
    {
        'name': 'Vladimir',
        'email': 'mi.Aliquam@Phasellus.net',
        'date': '2015-11-02',
        'nim': 131423004,
        'Kelas': '2A-D3',
		'sakit': 5,
		'izin': 9,
		'alpa': 1
    },
    {
        'name': 'Maggy',
        'email': 'ligula@acorciUt.edu',
        'date': '2017-02-25',
        'nim': 131423005,
        'Kelas': '2A-D3',
		'sakit': 5,
		'izin': 9,
		'alpa': 1
    },
    {
        'name': 'Unity',
        'email': 'Nunc.commodo@justo.org',
        'date': '2016-03-07',
        'nim': 131423006,
        'Kelas': '2A-D3',
		'sakit': 5,
		'izin': 9,
		'alpa': 1
    },
    {
        'name': 'Ralph',
        'email': 'augue@penatibuset.net',
        'date': '2017-02-27',
        'nim': 131423007,
        'Kelas': '2A-D3',
		'sakit': 7,
		'izin': 9,
		'alpa': 1
    },
    {
        'name': 'Medge',
        'email': 'sagittis.augue@taciti.edu',
        'date': '2016-03-02',
        'nim': 131423008,
        'Kelas': '2A-D3',
		'sakit': 7,
		'izin': 9,
		'alpa': 2
    },
    {
        'name': 'Orli',
        'email': 'nascetur@mipedenonummy.edu',
        'date': '2016-11-07',
        'nim': 131423009,
        'Kelas': '2A-D3',
		'sakit': 7,
		'izin': 9,
		'alpa': 2
    },
    {
        'name': 'Ainsley',
        'email': 'morbi.tristique.senectus@enim.ca',
        'date': '2016-02-11',
        'nim': 131423019,
        'Kelas': '2A-D3',
		'sakit': 19,
		'izin': 9,
		'alpa': 2
    },
    {
        'name': 'Candice',
        'email': 'turpis.non.enim@fringillami.com',
        'date': '2015-04-23',
        'nim': 131423011,
        'Kelas': '2A-D3',
		'sakit': 19,
		'izin': 9,
		'alpa': 2
    },
    {
        'name': 'Alexis',
        'email': 'lacinia.orci.consectetuer@dolorFuscefeugiat.ca',
        'date': '2016-08-18',
        'nim': 131423012,
        'Kelas': '2A-D3',
		'sakit': 19,
		'izin': 3,
		'alpa': 2
    },
    {
        'name': 'Diana',
        'email': 'pede.Cras@a.edu',
        'date': '2016-12-24',
        'nim': 1314230112,
        'Kelas': '2A-D3',
		'sakit': 12,
		'izin': 3,
		'alpa': 2
    },
    {
        'name': 'Tyrone',
        'email': 'ornare.In@duilectus.co.uk',
        'date': '2015-03-31',
        'nim': 131423014,
        'Kelas': '2A-D3',
		'sakit': 12,
		'izin': 3,
		'alpa': 2
    },
    {
        'name': 'Brennan',
        'email': 'scelerisque.lorem@enim.net',
        'date': '2016-09-07',
        'nim': 131423015,
        'Kelas': '2A-D3',
		'sakit': 12,
		'izin': 3,
		'alpa': 2
    },
    {
        'name': 'Lillith',
        'email': 'non@lectus.edu',
        'date': '2016-08-01',
        'nim': 131423016,
        'Kelas': '2A-D3',
		'sakit': 12,
		'izin': 3,
		'alpa': 2
    },
    {
        'name': 'Wayne',
        'email': 'at.egestas.a@Pellentesque.edu',
        'date': '2016-02-23',
        'nim': 131423017,
        'Kelas': '2A-D3',
		'sakit': 12,
		'izin': 3,
		'alpa': 2
    },
    {
        'name': 'Vielka',
        'email': 'Nam.porttitor@Uttincidunt.ca',
        'date': '2016-07-18',
        'nim': 131423018,
        'Kelas': '2A-D3',
		'sakit': 12,
		'izin': 3,
		'alpa': 2
    },
    {
        'name': 'Armando',
        'email': 'Aliquam@orciin.net',
        'date': '2016-12-07',
        'nim': 131423019,
        'Kelas': '2A-D3',
		'sakit': 12,
		'izin': 3,
		'alpa': 2
    },
    {
        'name': 'Justin',
        'email': 'gravida.non.sollicitudin@placerataugue.edu',
        'date': '2016-09-23',
        'nim': 131423023,
        'Kelas': '2A-D3',
		'sakit': 12,
		'izin': 3,
		'alpa': 2
    },
    {
        'name': 'Zorita',
        'email': 'enim@risus.org',
        'date': '2015-06-14',
        'nim': 131423021,
        'Kelas': '2A-D3',
		'sakit': 12,
		'izin': 3,
		'alpa': 7
    },
    {
        'name': 'Mariam',
        'email': 'purus.mauris.a@odiosagittis.ca',
        'date': '2016-10-14',
        'nim': 131423022,
        'Kelas': '2A-D3',
		'sakit': 12,
		'izin': 3,
		'alpa': 7
    },
    {
        'name': 'Malik',
        'email': 'Nam@enimEtiam.org',
        'date': '2016-09-20',
        'nim': 1314230214,
        'Kelas': '2A-D3',
		'sakit': 14,
		'izin': 3,
		'alpa': 7
    },
    {
        'name': 'Claire',
        'email': 'sapien@Nullamlobortis.ca',
        'date': '2016-12-29',
        'nim': 131423024,
        'Kelas': '2A-D3',
		'sakit': 14,
		'izin': 3,
		'alpa': 7
    },
    {
        'name': 'Hilel',
        'email': 'tempor@purusmaurisa.edu',
        'date': '2016-07-09',
        'nim': 131423025,
        'Kelas': '2A-D3',
		'sakit': 14,
		'izin': 10,
		'alpa': 7
    },
    {
        'name': 'Alea',
        'email': 'vulputate@orciUt.ca',
        'date': '2015-03-21',
        'nim': 131423026,
        'Kelas': '2A-D3',
		'sakit': 14,
		'izin': 10,
		'alpa': 7
    },
    {
        'name': 'Nash',
        'email': 'Nunc.ullamcorper.velit@egetmetuseu.edu',
        'date': '2016-10-21',
        'nim': 131423027,
        'Kelas': '2A-D3',
		'sakit': 14,
		'izin': 10,
		'alpa': 7
    },
    {
        'name': 'Brennan',
        'email': 'Vestibulum@Sedpharetra.org',
        'date': '2016-06-06',
        'nim': 131423029,
        'Kelas': '2A-D3',
		'sakit': 14,
		'izin': 10,
		'alpa': 7
    },
    {
        'name': 'Diana',
        'email': 'Cras.vulputate@erosturpisnon.edu',
        'date': '2016-09-07',
        'nim': 1314230310,
        'Kelas': '2A-D3',
		'sakit': 14,
		'izin': 10,
		'alpa': 7
    },
    {
        'name': 'Farrah',
        'email': 'dignissim.tempor.arcu@gravidamaurisut.edu',
        'date': '2016-11-30',
        'nim': 131413001,
        'Kelas': '2A-D3',
		'sakit': 2,
		'izin': 10,
		'alpa': 7
    },
    {
        'name': 'August',
        'email': 'tincidunt.Donec@dictumeleifendnunc.org',
        'date': '2016-11-21',
        'nim': 131413002,
        'Kelas': '2A-D3',
		'sakit': 2,
		'izin': 10,
		'alpa': 7
    },
    {
        'name': 'Reese',
        'email': 'et.magnis.dis@montesnasceturridiculus.net',
        'date': '2015-07-01',
        'nim': 131413002,
        'Kelas': '2A-D3',
		'sakit': 2,
		'izin': 10,
		'alpa': 7
    },
    {
        'name': 'Pascale',
        'email': 'pede.ultrices@lacinia.com',
        'date': '2016-02-18',
        'nim': 131413004,
        'Kelas': '2A-D3',
		'sakit': 2,
		'izin': 10,
		'alpa': 7
    },
    {
        'name': 'Gage',
        'email': 'In.mi.pede@diameu.edu',
        'date': '2016-07-31',
        'nim': 131413005,
        'Kelas': '2A-D3',
		'sakit': 2,
		'izin': 10,
		'alpa': 7
    },
    {
        'name': 'Nora',
        'email': 'Ut.semper.pretium@luctussit.net',
        'date': '2016-01-23',
        'nim': 131413006,
        'Kelas': '2A-D3',
		'sakit': 2,
		'izin': 10,
		'alpa': 7
    },
    {
        'name': 'Jameson',
        'email': 'dolor.Fusce.feugiat@tempusnon.ca',
        'date': '2016-06-24',
        'nim': 131413007,
        'Kelas': '2A-D4',
		'sakit': 2,
		'izin': 10,
		'alpa': 7
    },
    {
        'name': 'Ryder',
        'email': 'Vestibulum.accumsan@egetmetus.co.uk',
        'date': '2015-08-02',
        'nim': 131413008,
        'Kelas': '2A-D3',
		'sakit': 2,
		'izin': 10,
		'alpa': 13
    },
    {
        'name': 'Lyle',
        'email': 'libero.nec.ligula@euaugueporttitor.co.uk',
        'date': '2015-11-15',
        'nim': 131413009,
        'Kelas': '2A-D3',
		'sakit': 2,
		'izin': 10,
		'alpa': 13
    },
    {
        'name': 'Carly',
        'email': 'vitae.sodales@pretium.co.uk',
        'date': '2016-01-11',
        'nim': 1314130110,
        'Kelas': '2A-D4',
		'sakit': 2,
		'izin': 10,
		'alpa': 13
    },
    {
        'name': 'Hector',
        'email': 'luctus@orci.com',
        'date': '2016-12-20',
        'nim': 131413011,
        'Kelas': '2B-D3',
		'sakit': 7,
		'izin': 10,
		'alpa': 13
    },
    {
        'name': 'Luke',
        'email': 'luctus.aliquet.odio@bibendumDonecfelis.edu',
        'date': '2016-03-06',
        'nim': 131413012,
        'Kelas': '2A-D3',
		'sakit': 7,
		'izin': 10,
		'alpa': 13
    },
    {
        'name': 'Celeste',
        'email': 'et.malesuada.fames@utdolordapibus.org',
        'date': '2015-10-04',
        'nim': 131413014,
        'Kelas': '2B-D3',
		'sakit': 7,
		'izin': 10,
		'alpa': 13
    },
    {
        'name': 'Ila',
        'email': 'urna.Nullam@nullaCraseu.ca',
        'date': '2015-05-10',
        'nim': 131413015,
        'Kelas': '2A-D3',
		'sakit': 7,
		'izin': 10,
		'alpa': 13
    },
    {
        'name': 'Leila',
        'email': 'vehicula@orciUtsagittis.net',
        'date': '2016-11-13',
        'nim': 131413016,
        'Kelas': '2A-D3',
		'sakit': 7,
		'izin': 10,
		'alpa': 13
    },
    {
        'name': 'Zahir',
        'email': 'eleifend.non.dapibus@auguescelerisque.edu',
        'date': '2015-07-13',
        'nim': 131413017,
        'Kelas': '2A-D3',
		'sakit': 7,
		'izin': 10,
		'alpa': 13
    },
    {
        'name': 'Jin',
        'email': 'fames.ac.turpis@Namligula.edu',
        'date': '2015-06-17',
        'nim': 131413018,
        'Kelas': '2A-D3',
		'sakit': 7,
		'izin': 10,
		'alpa': 13
    },
    {
        'name': 'Wallace',
        'email': 'natoque.penatibus@tortorIntegeraliquam.com',
        'date': '2016-11-02',
        'nim': 131413019,
        'Kelas': '2A-D3',
		'sakit': 7,
		'izin': 10,
		'alpa': 13
    },
    {
        'name': 'Wallace',
        'email': 'nulla.magna.malesuada@cursusNuncmauris.edu',
        'date': '2016-01-25',
        'nim': 1314130210,
        'Kelas': '2A-D3',
		'sakit': 7,
		'izin': 10,
		'alpa': 13
    },
    {
        'name': 'Buffy',
        'email': 'est@Vestibulumanteipsum.edu',
        'date': '2016-10-10',
        'nim': 131413021,
        'Kelas': '2A-D3',
		'sakit': 7,
		'izin': 10,
		'alpa': 13
    },
    {
        'name': 'Jin',
        'email': 'orci.in@nuncsitamet.org',
        'date': '2017-01-23',
        'nim': 131413022,
        'Kelas': '2A-D3',
		'sakit': 7,
		'izin': 10,
		'alpa': 13
    },
    {
        'name': 'Ethan',
        'email': 'ad@enimcommodohendrerit.com',
        'date': '2015-07-09',
        'nim': 131413027,
        'Kelas': '2A-D3',
		'sakit': 7,
		'izin': 10,
		'alpa': 13
    },
    {
        'name': 'Sheila',
        'email': 'dictum@rhoncus.com',
        'date': '2015-10-15',
        'nim': 131413024,
        'Kelas': '2A-D3',
		'sakit': 8,
		'izin': 10,
		'alpa': 13
    },
    {
        'name': 'Jolie',
        'email': 'facilisis@uterat.net',
        'date': '2016-04-30',
        'nim': 131413025,
        'Kelas': '2A-D3',
		'sakit': 8,
		'izin': 10,
		'alpa': 13
    },
    {
        'name': 'Eugenia',
        'email': 'dolor@nibhsit.ca',
        'date': '2017-01-23',
        'nim': 131413026,
        'Kelas': '2A-D3',
		'sakit': 8,
		'izin': 10,
		'alpa': 13
    },
    {
        'name': 'Suki',
        'email': 'pretium.neque@consequatnecmollis.net',
        'date': '2016-04-20',
        'nim': 131413027,
        'Kelas': '2A-D3',
		'sakit': 8,
		'izin': 10,
		'alpa': 13
    },
    {
        'name': 'Barrett',
        'email': 'a@lobortismaurisSuspendisse.edu',
        'date': '2015-08-27',
        'nim': 131413028,
        'Kelas': '2A-D3',
		'sakit': 8,
		'izin': 10,
		'alpa': 13
    },
    {
        'name': 'Tashya',
        'email': 'nascetur@tinciduntadipiscingMauris.ca',
        'date': '2015-05-31',
        'nim': 131413029,
        'Kelas': '2A-D3',
		'sakit': 8,
		'izin': 10,
		'alpa': 20
    },
    {
        'name': 'Doris',
        'email': 'vitae@Ut.net',
        'date': '2015-03-17',
        'nim': 1314130310,
        'Kelas': '2A-D3',
		'sakit': 8,
		'izin': 0,
		'alpa': 20
    },
    {
        'name': 'Herrod',
        'email': 'arcu.Vestibulum@augueporttitorinterdum.co.uk',
        'date': '2016-08-31',
        'nim': 141513001,
        'Kelas': '2A-D3',
		'sakit': 8,
		'izin': 0,
		'alpa': 20
    },
    {
        'name': 'Patience',
        'email': 'gravida@in.ca',
        'date': '2017-02-26',
        'nim': 141513002,
        'Kelas': '2A-D3',
		'sakit': 8,
		'izin': 0,
		'alpa': 20
    },
    {
        'name': 'arden',
        'email': 'tincidunt.nunc.ac@nibhenim.ca',
        'date': '2017-01-29',
        'nim': 141513008,
        'Kelas': '2A-D3',
		'sakit': 8,
		'izin': 0,
		'alpa': 20
    },
    {
        'name': 'Harper',
        'email': 'tempor.lorem@quisturpis.edu',
        'date': '2016-04-07',
        'nim': 141513004,
        'Kelas': '2A-D3',
		'sakit': 8,
		'izin': 0,
		'alpa': 20
    },
    {
        'name': 'Burke',
        'email': 'lobortis@velpede.ca',
        'date': '2015-06-01',
        'nim': 141513005,
        'Kelas': '2A-D3',
		'sakit': 9,
		'izin': 0,
		'alpa': 20
    },
    {
        'name': 'Jael',
        'email': 'hendrerit.a.arcu@montes.edu',
        'date': '2016-05-08',
        'nim': 141513006,
        'Kelas': '2A-D3',
		'sakit': 9,
		'izin': 0,
		'alpa': 20
    },
    {
        'name': 'Stephanie',
        'email': 'dictum@Inmi.net',
        'date': '2016-03-29',
        'nim': 141513007,
        'Kelas': '2A-D3',
		'sakit': 9,
		'izin': 0,
		'alpa': 20
    },
    {
        'name': 'Frances',
        'email': 'lectus.quis.massa@non.ca',
        'date': '2015-05-21',
        'nim': 141513008,
        'Kelas': '2A-D3',
		'sakit': 9,
		'izin': 0,
		'alpa': 20
    },
    {
        'name': 'Mark',
        'email': 'est.Mauris@arcuvel.ca',
        'date': '2015-08-01',
        'nim': 141513009,
        'Kelas': '2A-D3',
		'sakit': 9,
		'izin': 0,
		'alpa': 20
    },
    {
        'name': 'Roth',
        'email': 'enim.non.nisi@Lorem.net',
        'date': '2016-10-12',
        'nim': 141513010,
        'Kelas': '2A-D3',
		'sakit': 9,
		'izin': 0,
		'alpa': 20
    },
    {
        'name': 'Dakota',
        'email': 'sed.orci@ligulaAeneaneuismod.org',
        'date': '2016-05-21',
        'nim': 141513011,
        'Kelas': '2A-D3',
		'sakit': 9,
		'izin': 0,
		'alpa': 20
    },
    {
        'name': 'Teegan',
        'email': 'augue.eu.tempor@Integervulputate.org',
        'date': '2017-02-18',
        'nim': 141513012,
        'Kelas': '2A-D3',
		'sakit': 9,
		'izin': 0,
		'alpa': 20
    },
    {
        'name': 'Chandler',
        'email': 'a.odio@sedturpis.edu',
        'date': '2015-05-23',
        'nim': 141513019,
        'Kelas': '2A-D3',
		'sakit': 9,
		'izin': 0,
		'alpa': 20
    },
    {
        'name': 'Kathleen',
        'email': 'Ut.tincidunt.vehicula@consectetuerrhoncusNullam.edu',
        'date': '2016-03-09',
        'nim': 141513014,
        'Kelas': '2A-D3',
		'sakit': 9,
		'izin': 0,
		'alpa': 20
    },
    {
        'name': 'Scarlet',
        'email': 'Suspendisse.non@montesnascetur.com',
        'date': '2015-06-21',
        'nim': 141513015,
        'Kelas': '2A-D3',
		'sakit': 9,
		'izin': 0,
		'alpa': 20
    },
    {
        'name': 'Haley',
        'email': 'risus@Cras.net',
        'date': '2017-01-22',
        'nim': 141513016,
        'Kelas': '2A-D3',
		'sakit': 9,
		'izin': 0,
		'alpa': 9
    },
    {
        'name': 'Jesse',
        'email': 'odio@amet.org',
        'date': '2016-01-29',
        'nim': 141513017,
        'Kelas': '2A-D3',
		'sakit': 3,
		'izin': 0,
		'alpa': 9
    },
    {
        'name': 'Noble',
        'email': 'vulputate.risus.a@Quisqueliberolacus.co.uk',
        'date': '2016-08-16',
        'nim': 141513018,
        'Kelas': '2A-D3',
		'sakit': 3,
		'izin': 0,
		'alpa': 9
    },
    {
        'name': 'Phelan',
        'email': 'nascetur.ridiculus@fringilla.edu',
        'date': '2015-11-09',
        'nim': 141513019,
        'Kelas': '2A-D3',
		'sakit': 3,
		'izin': 0,
		'alpa': 9
    },
    {
        'name': 'Amos',
        'email': 'Phasellus.fermentum@montesnascetur.ca',
        'date': '2016-01-20',
        'nim': 141513020,
        'Kelas': '2A-D3',
		'sakit': 3,
		'izin': 0,
		'alpa': 9
    },
    {
        'name': 'Pandora',
        'email': 'aliquet.Phasellus@sociis.ca',
        'date': '2016-02-21',
        'nim': 141513021,
        'Kelas': '2A-D3',
		'sakit': 3,
		'izin': 0,
		'alpa': 9
    },
    {
        'name': 'Jada',
        'email': 'eu@a.edu',
        'date': '2016-01-10',
        'nim': 141513022,
        'Kelas': '2A-D3',
		'sakit': 3,
		'izin': 0,
		'alpa': 9
    },
    {
        'name': 'Abraham',
        'email': 'Nunc@Vivamus.com',
        'date': '2017-02-15',
        'nim': 141513023,
        'Kelas': '2A-D3',
		'sakit': 3,
		'izin': 0,
		'alpa': 9
    },
    {
        'name': 'Bert',
        'email': 'non.bibendum@mollisduiin.org',
        'date': '2015-07-17',
        'nim': 141513024,
        'Kelas': '2A-D3',
		'sakit': 3,
		'izin': 0,
		'alpa': 9
    },
    {
        'name': 'Lars',
        'email': 'dolor.Fusce.feugiat@metusurnaconvallis.ca',
        'date': '2015-07-05',
        'nim': 141513025,
        'Kelas': '2A-D3',
		'sakit': 3,
		'izin': 0,
		'alpa': 9
    },
    {
        'name': 'Bethany',
        'email': 'Sed.nulla.ante@sociosquadlitora.net',
        'date': '2015-12-23',
        'nim': 141513026,
        'Kelas': '2A-D3',
		'sakit': 3,
		'izin': 0,
		'alpa': 9
    },
    {
        'name': 'Jasmine',
        'email': 'id.enim.Curabitur@tellus.com',
        'date': '2016-11-23',
        'nim': 141513027,
        'Kelas': '2A-D3',
		'sakit': 3,
		'izin': 0,
		'alpa': 9
    },
    {
        'name': 'Brody',
        'email': 'ac.orci@facilisisnon.com',
        'date': '2015-11-18',
        'nim': 141513028,
        'Kelas': '2A-D3',
		'sakit': 3,
		'izin': 0,
		'alpa': 9
    },
    {
        'name': 'alec',
        'email': 'in@aliquameu.org',
        'date': '2015-04-21',
        'nim': 141513029,
        'Kelas': '2A-D3',
		'sakit': 3,
		'izin': 0,
		'alpa': 9
    },
    {
        'name': 'Audrey',
        'email': 'Donec@Aliquamadipiscinglobortis.org',
        'date': '2016-12-06',
        'nim': 141513030,
        'Kelas': '2A-D3',
		'sakit': 3,
		'izin': 0,
		'alpa': 9
    },
    {
        'name': 'Forrest',
        'email': 'leo.elementum@ridiculus.co.uk',
        'date': '2015-09-15',
        'nim': 141523001,
        'Kelas': '2A-D3',
		'sakit': 3,
		'izin': 0,
		'alpa': 9
    },
    {
        'name': 'Jessica',
        'email': 'a.mi.fringilla@montes.net',
        'date': '2016-07-29',
        'nim': 141523002,
        'Kelas': '2A-D3',
		'sakit': 3,
		'izin': 0,
		'alpa': 9
    },
    {
        'name': 'Cedric',
        'email': 'Praesent.eu.nulla@tempordiamdictum.co.uk',
        'date': '2016-10-02',
        'nim': 141523003,
        'Kelas': '2A-D3',
		'sakit': 3,
		'izin': 0,
		'alpa': 9
    },
    {
        'name': 'Maile',
        'email': 'pharetra@Duisatlacus.edu',
        'date': '2016-12-29',
        'nim': 141523004,
        'Kelas': '2A-D3',
		'sakit': 3,
		'izin': 0,
		'alpa': 9
    },
    {
        'name': 'acton',
        'email': 'consequat.auctor@Quisque.org',
        'date': '2017-01-19',
        'nim': 141523005,
        'Kelas': '2A-D3',
		'sakit': 3,
		'izin': 0,
		'alpa': 9
    },
    {
        'name': 'Macey',
        'email': 'faucibus@tellus.org',
        'date': '2015-10-30',
        'nim': 141523006,
        'Kelas': '2A-D3',
		'sakit': 3,
		'izin': 0,
		'alpa': 9
    },
    {
        'name': 'Iona',
        'email': 'rutrum.justo@eu.org',
        'date': '2015-11-10',
        'nim': 141523007,
        'age': 48,
		'sakit': 3,
		'izin': 0,
		'alpa': 9
    },
    {
        'name': 'Eve',
        'email': 'risus.Morbi@aliquameros.com',
        'date': '2015-12-21',
        'nim': 141523008,
        'Kelas': '2A-D3',
		'sakit': 3,
		'izin': 0,
		'alpa': 9
    },
    {
        'name': 'Jayme',
        'email': 'a.nunc.In@convallisante.ca',
        'date': '2016-02-07',
        'nim': 141523009,
        'Kelas': '2A-D3',
		'sakit': 3,
		'izin': 0,
		'alpa': 9
    },
    {
        'name': 'Bo',
        'email': 'posuere.cubilia.Curae@estNunclaoreet.net',
        'date': '2016-08-16',
        'nim': 141523010,
        'Kelas': '2A-D3',
		'sakit': 3,
		'izin': 0,
		'alpa': 9
    },
    {
        'name': 'Matthew',
        'email': 'enim.Mauris.quis@vehicula.edu',
        'date': '2015-05-01',
        'nim': 141523011,
        'Kelas': '2A-D3',
		'sakit': 3,
		'izin': 0,
		'alpa': 9
    },
    {
        'name': 'Justina',
        'email': 'Donec.nibh@Vivamusmolestie.ca',
        'date': '2015-06-24',
        'nim': 141523012,
        'Kelas': '2A-D3',
		'sakit': 3,
		'izin': 0,
		'alpa': 9
    }
];

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.dataTableData);
      }, 2000);
    });
  }
}
