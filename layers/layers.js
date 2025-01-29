var wms_layers = [];

var format_indeks_jaccarda_1999_2024_0 = new ol.format.GeoJSON();
var features_indeks_jaccarda_1999_2024_0 = format_indeks_jaccarda_1999_2024_0.readFeatures(json_indeks_jaccarda_1999_2024_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_indeks_jaccarda_1999_2024_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_indeks_jaccarda_1999_2024_0.addFeatures(features_indeks_jaccarda_1999_2024_0);
var lyr_indeks_jaccarda_1999_2024_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_indeks_jaccarda_1999_2024_0, 
                style: style_indeks_jaccarda_1999_2024_0,
                popuplayertitle: 'indeks_jaccarda_1999_2024',
                interactive: true,
    title: 'indeks_jaccarda_1999_2024<br />\
    <img src="styles/legend/indeks_jaccarda_1999_2024_0_0.png" /> 0 - 0,009<br />\
    <img src="styles/legend/indeks_jaccarda_1999_2024_0_1.png" /> 0,009 - 0,01<br />\
    <img src="styles/legend/indeks_jaccarda_1999_2024_0_2.png" /> 0,01 - 0,02<br />\
    <img src="styles/legend/indeks_jaccarda_1999_2024_0_3.png" /> 0,02 - 0,038<br />\
    <img src="styles/legend/indeks_jaccarda_1999_2024_0_4.png" /> 0,038 - 1<br />'
        });
var format_indeks_jaccarda_1940_1999_1 = new ol.format.GeoJSON();
var features_indeks_jaccarda_1940_1999_1 = format_indeks_jaccarda_1940_1999_1.readFeatures(json_indeks_jaccarda_1940_1999_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_indeks_jaccarda_1940_1999_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_indeks_jaccarda_1940_1999_1.addFeatures(features_indeks_jaccarda_1940_1999_1);
var lyr_indeks_jaccarda_1940_1999_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_indeks_jaccarda_1940_1999_1, 
                style: style_indeks_jaccarda_1940_1999_1,
                popuplayertitle: 'indeks_jaccarda_1940_1999',
                interactive: true,
    title: 'indeks_jaccarda_1940_1999<br />\
    <img src="styles/legend/indeks_jaccarda_1940_1999_1_0.png" /> 0 - 0,062<br />\
    <img src="styles/legend/indeks_jaccarda_1940_1999_1_1.png" /> 0,062 - 0,124<br />\
    <img src="styles/legend/indeks_jaccarda_1940_1999_1_2.png" /> 0,124 - 0,186<br />\
    <img src="styles/legend/indeks_jaccarda_1940_1999_1_3.png" /> 0,186 - 0,248<br />\
    <img src="styles/legend/indeks_jaccarda_1940_1999_1_4.png" /> 0,248 - 1<br />'
        });
var format_indeks_jaccarda_1940_2024_2 = new ol.format.GeoJSON();
var features_indeks_jaccarda_1940_2024_2 = format_indeks_jaccarda_1940_2024_2.readFeatures(json_indeks_jaccarda_1940_2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_indeks_jaccarda_1940_2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_indeks_jaccarda_1940_2024_2.addFeatures(features_indeks_jaccarda_1940_2024_2);
var lyr_indeks_jaccarda_1940_2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_indeks_jaccarda_1940_2024_2, 
                style: style_indeks_jaccarda_1940_2024_2,
                popuplayertitle: 'indeks_jaccarda_1940_2024',
                interactive: true,
    title: 'indeks_jaccarda_1940_2024<br />\
    <img src="styles/legend/indeks_jaccarda_1940_2024_2_0.png" /> 0 - 0,05<br />\
    <img src="styles/legend/indeks_jaccarda_1940_2024_2_1.png" /> 0,05 - 0,1<br />\
    <img src="styles/legend/indeks_jaccarda_1940_2024_2_2.png" /> 0,1 - 0,15<br />\
    <img src="styles/legend/indeks_jaccarda_1940_2024_2_3.png" /> 0,15 - 0,2<br />\
    <img src="styles/legend/indeks_jaccarda_1940_2024_2_4.png" /> 0,2 - 1<br />'
        });
var format_wskaznik_ksztaltu_2024_3 = new ol.format.GeoJSON();
var features_wskaznik_ksztaltu_2024_3 = format_wskaznik_ksztaltu_2024_3.readFeatures(json_wskaznik_ksztaltu_2024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wskaznik_ksztaltu_2024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wskaznik_ksztaltu_2024_3.addFeatures(features_wskaznik_ksztaltu_2024_3);
var lyr_wskaznik_ksztaltu_2024_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wskaznik_ksztaltu_2024_3, 
                style: style_wskaznik_ksztaltu_2024_3,
                popuplayertitle: 'wskaznik_ksztaltu_2024',
                interactive: true,
    title: 'wskaznik_ksztaltu_2024<br />\
    <img src="styles/legend/wskaznik_ksztaltu_2024_3_0.png" /> 0 - 29,8<br />\
    <img src="styles/legend/wskaznik_ksztaltu_2024_3_1.png" /> 29,8 - 39,4<br />\
    <img src="styles/legend/wskaznik_ksztaltu_2024_3_2.png" /> 39,4 - 42<br />\
    <img src="styles/legend/wskaznik_ksztaltu_2024_3_3.png" /> 42 - 44,8<br />\
    <img src="styles/legend/wskaznik_ksztaltu_2024_3_4.png" /> 0,448 - 1<br />'
        });
var format_wskaznik_ksztaltu_1999_4 = new ol.format.GeoJSON();
var features_wskaznik_ksztaltu_1999_4 = format_wskaznik_ksztaltu_1999_4.readFeatures(json_wskaznik_ksztaltu_1999_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wskaznik_ksztaltu_1999_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wskaznik_ksztaltu_1999_4.addFeatures(features_wskaznik_ksztaltu_1999_4);
var lyr_wskaznik_ksztaltu_1999_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wskaznik_ksztaltu_1999_4, 
                style: style_wskaznik_ksztaltu_1999_4,
                popuplayertitle: 'wskaznik_ksztaltu_1999',
                interactive: true,
    title: 'wskaznik_ksztaltu_1999<br />\
    <img src="styles/legend/wskaznik_ksztaltu_1999_4_0.png" /> 0 - 0,454<br />\
    <img src="styles/legend/wskaznik_ksztaltu_1999_4_1.png" /> 0,454 - 0,504<br />\
    <img src="styles/legend/wskaznik_ksztaltu_1999_4_2.png" /> 0,504 - 0,53<br />\
    <img src="styles/legend/wskaznik_ksztaltu_1999_4_3.png" /> 0,53 - 0,578<br />\
    <img src="styles/legend/wskaznik_ksztaltu_1999_4_4.png" /> 0,578 - 1<br />'
        });
var format_wskaznik_ksztaltu_1940_5 = new ol.format.GeoJSON();
var features_wskaznik_ksztaltu_1940_5 = format_wskaznik_ksztaltu_1940_5.readFeatures(json_wskaznik_ksztaltu_1940_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wskaznik_ksztaltu_1940_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wskaznik_ksztaltu_1940_5.addFeatures(features_wskaznik_ksztaltu_1940_5);
var lyr_wskaznik_ksztaltu_1940_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wskaznik_ksztaltu_1940_5, 
                style: style_wskaznik_ksztaltu_1940_5,
                popuplayertitle: 'wskaznik_ksztaltu_1940',
                interactive: true,
    title: 'wskaznik_ksztaltu_1940<br />\
    <img src="styles/legend/wskaznik_ksztaltu_1940_5_0.png" /> 0 - 0,344<br />\
    <img src="styles/legend/wskaznik_ksztaltu_1940_5_1.png" /> 0,344 - 0,414<br />\
    <img src="styles/legend/wskaznik_ksztaltu_1940_5_2.png" /> 0,414 - 0,46<br />\
    <img src="styles/legend/wskaznik_ksztaltu_1940_5_3.png" /> 0,46 - 0,47<br />\
    <img src="styles/legend/wskaznik_ksztaltu_1940_5_4.png" /> 0,47 - 1<br />'
        });
var format_rzeka_1940_6 = new ol.format.GeoJSON();
var features_rzeka_1940_6 = format_rzeka_1940_6.readFeatures(json_rzeka_1940_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rzeka_1940_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rzeka_1940_6.addFeatures(features_rzeka_1940_6);
var lyr_rzeka_1940_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rzeka_1940_6, 
                style: style_rzeka_1940_6,
                popuplayertitle: 'rzeka_1940',
                interactive: true,
                title: '<img src="styles/legend/rzeka_1940_6.png" /> rzeka_1940'
            });
var format_rzeka_1999_7 = new ol.format.GeoJSON();
var features_rzeka_1999_7 = format_rzeka_1999_7.readFeatures(json_rzeka_1999_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rzeka_1999_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rzeka_1999_7.addFeatures(features_rzeka_1999_7);
var lyr_rzeka_1999_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rzeka_1999_7, 
                style: style_rzeka_1999_7,
                popuplayertitle: 'rzeka_1999',
                interactive: true,
                title: '<img src="styles/legend/rzeka_1999_7.png" /> rzeka_1999'
            });
var format_rzeka_2024_8 = new ol.format.GeoJSON();
var features_rzeka_2024_8 = format_rzeka_2024_8.readFeatures(json_rzeka_2024_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rzeka_2024_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rzeka_2024_8.addFeatures(features_rzeka_2024_8);
var lyr_rzeka_2024_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rzeka_2024_8, 
                style: style_rzeka_2024_8,
                popuplayertitle: 'rzeka_2024',
                interactive: true,
                title: '<img src="styles/legend/rzeka_2024_8.png" /> rzeka_2024'
            });
var format_rzeka_conajmniej1_9 = new ol.format.GeoJSON();
var features_rzeka_conajmniej1_9 = format_rzeka_conajmniej1_9.readFeatures(json_rzeka_conajmniej1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rzeka_conajmniej1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rzeka_conajmniej1_9.addFeatures(features_rzeka_conajmniej1_9);
var lyr_rzeka_conajmniej1_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rzeka_conajmniej1_9, 
                style: style_rzeka_conajmniej1_9,
                popuplayertitle: 'rzeka_conajmniej1',
                interactive: true,
                title: '<img src="styles/legend/rzeka_conajmniej1_9.png" /> rzeka_conajmniej1'
            });
var format_rzeka_kiedykolwiek_10 = new ol.format.GeoJSON();
var features_rzeka_kiedykolwiek_10 = format_rzeka_kiedykolwiek_10.readFeatures(json_rzeka_kiedykolwiek_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rzeka_kiedykolwiek_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rzeka_kiedykolwiek_10.addFeatures(features_rzeka_kiedykolwiek_10);
var lyr_rzeka_kiedykolwiek_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rzeka_kiedykolwiek_10, 
                style: style_rzeka_kiedykolwiek_10,
                popuplayertitle: 'rzeka_kiedykolwiek',
                interactive: true,
                title: '<img src="styles/legend/rzeka_kiedykolwiek_10.png" /> rzeka_kiedykolwiek'
            });

lyr_indeks_jaccarda_1999_2024_0.setVisible(true);lyr_indeks_jaccarda_1940_1999_1.setVisible(true);lyr_indeks_jaccarda_1940_2024_2.setVisible(true);lyr_wskaznik_ksztaltu_2024_3.setVisible(true);lyr_wskaznik_ksztaltu_1999_4.setVisible(true);lyr_wskaznik_ksztaltu_1940_5.setVisible(true);lyr_rzeka_1940_6.setVisible(true);lyr_rzeka_1999_7.setVisible(true);lyr_rzeka_2024_8.setVisible(true);lyr_rzeka_conajmniej1_9.setVisible(true);lyr_rzeka_kiedykolwiek_10.setVisible(true);
var layersList = [lyr_indeks_jaccarda_1999_2024_0,lyr_indeks_jaccarda_1940_1999_1,lyr_indeks_jaccarda_1940_2024_2,lyr_wskaznik_ksztaltu_2024_3,lyr_wskaznik_ksztaltu_1999_4,lyr_wskaznik_ksztaltu_1940_5,lyr_rzeka_1940_6,lyr_rzeka_1999_7,lyr_rzeka_2024_8,lyr_rzeka_conajmniej1_9,lyr_rzeka_kiedykolwiek_10];
lyr_indeks_jaccarda_1999_2024_0.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GRID_ID': 'GRID_ID', 'i1940': 'i1940', 'i1970': 'i1970', 'i2024': 'i2024', 'MIN1940_19': 'MIN1940_19', 'MIN1940_20': 'MIN1940_20', 'MIN1970_20': 'MIN1970_20', 'SUMA_1940_': 'SUMA_1940_', 'SUMA1940_2': 'SUMA1940_2', 'SUMA1970_2': 'SUMA1970_2', 'I40_70': 'I40_70', 'i40_24': 'i40_24', 'i70_24': 'i70_24', 'WSP_1940_2': 'WSP_1940_2', 'WSP_1940_1': 'WSP_1940_1', 'WSP_1999_2': 'WSP_1999_2', 'JA_1940': 'JA_1940', 'JA_1999': 'JA_1999', 'JA_2024': 'JA_2024', 'OBJECTID': 'OBJECTID', 'GRID_ID_1': 'GRID_ID_1', 'AREA': 'AREA', 'PERCENTAGE': 'PERCENTAGE', 'OBJECTID_1': 'OBJECTID_1', 'GRID_ID_12': 'GRID_ID_12', 'AREA_1': 'AREA_1', 'PERCENTA_1': 'PERCENTA_1', 'OBJECTID_2': 'OBJECTID_2', 'GRID_ID_13': 'GRID_ID_13', 'AREA_12': 'AREA_12', 'PERCENTA_2': 'PERCENTA_2', });
lyr_indeks_jaccarda_1940_1999_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GRID_ID': 'GRID_ID', 'i1940': 'i1940', 'i1970': 'i1970', 'i2024': 'i2024', 'MIN1940_19': 'MIN1940_19', 'MIN1940_20': 'MIN1940_20', 'MIN1970_20': 'MIN1970_20', 'SUMA_1940_': 'SUMA_1940_', 'SUMA1940_2': 'SUMA1940_2', 'SUMA1970_2': 'SUMA1970_2', 'I40_70': 'I40_70', 'i40_24': 'i40_24', 'i70_24': 'i70_24', 'WSP_1940_2': 'WSP_1940_2', 'WSP_1940_1': 'WSP_1940_1', 'WSP_1999_2': 'WSP_1999_2', 'JA_1940': 'JA_1940', 'JA_1999': 'JA_1999', 'JA_2024': 'JA_2024', 'OBJECTID': 'OBJECTID', 'GRID_ID_1': 'GRID_ID_1', 'AREA': 'AREA', 'PERCENTAGE': 'PERCENTAGE', 'OBJECTID_1': 'OBJECTID_1', 'GRID_ID_12': 'GRID_ID_12', 'AREA_1': 'AREA_1', 'PERCENTA_1': 'PERCENTA_1', 'OBJECTID_2': 'OBJECTID_2', 'GRID_ID_13': 'GRID_ID_13', 'AREA_12': 'AREA_12', 'PERCENTA_2': 'PERCENTA_2', });
lyr_indeks_jaccarda_1940_2024_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GRID_ID': 'GRID_ID', 'i1940': 'i1940', 'i1970': 'i1970', 'i2024': 'i2024', 'MIN1940_19': 'MIN1940_19', 'MIN1940_20': 'MIN1940_20', 'MIN1970_20': 'MIN1970_20', 'SUMA_1940_': 'SUMA_1940_', 'SUMA1940_2': 'SUMA1940_2', 'SUMA1970_2': 'SUMA1970_2', 'I40_70': 'I40_70', 'i40_24': 'i40_24', 'i70_24': 'i70_24', 'WSP_1940_2': 'WSP_1940_2', 'WSP_1940_1': 'WSP_1940_1', 'WSP_1999_2': 'WSP_1999_2', 'JA_1940': 'JA_1940', 'JA_1999': 'JA_1999', 'JA_2024': 'JA_2024', 'OBJECTID': 'OBJECTID', 'GRID_ID_1': 'GRID_ID_1', 'AREA': 'AREA', 'PERCENTAGE': 'PERCENTAGE', 'OBJECTID_1': 'OBJECTID_1', 'GRID_ID_12': 'GRID_ID_12', 'AREA_1': 'AREA_1', 'PERCENTA_1': 'PERCENTA_1', 'OBJECTID_2': 'OBJECTID_2', 'GRID_ID_13': 'GRID_ID_13', 'AREA_12': 'AREA_12', 'PERCENTA_2': 'PERCENTA_2', });
lyr_wskaznik_ksztaltu_2024_3.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GRID_ID': 'GRID_ID', 'i1940': 'i1940', 'i1970': 'i1970', 'i2024': 'i2024', 'MIN1940_19': 'MIN1940_19', 'MIN1940_20': 'MIN1940_20', 'MIN1970_20': 'MIN1970_20', 'SUMA_1940_': 'SUMA_1940_', 'SUMA1940_2': 'SUMA1940_2', 'SUMA1970_2': 'SUMA1970_2', 'I40_70': 'I40_70', 'i40_24': 'i40_24', 'i70_24': 'i70_24', 'WSP_1940_2': 'WSP_1940_2', 'WSP_1940_1': 'WSP_1940_1', 'WSP_1999_2': 'WSP_1999_2', 'JA_1940': 'JA_1940', 'JA_1999': 'JA_1999', 'JA_2024': 'JA_2024', 'OBJECTID': 'OBJECTID', 'GRID_ID_1': 'GRID_ID_1', 'AREA': 'AREA', 'PERCENTAGE': 'PERCENTAGE', 'OBJECTID_1': 'OBJECTID_1', 'GRID_ID_12': 'GRID_ID_12', 'AREA_1': 'AREA_1', 'PERCENTA_1': 'PERCENTA_1', 'OBJECTID_2': 'OBJECTID_2', 'GRID_ID_13': 'GRID_ID_13', 'AREA_12': 'AREA_12', 'PERCENTA_2': 'PERCENTA_2', });
lyr_wskaznik_ksztaltu_1999_4.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GRID_ID': 'GRID_ID', 'i1940': 'i1940', 'i1970': 'i1970', 'i2024': 'i2024', 'MIN1940_19': 'MIN1940_19', 'MIN1940_20': 'MIN1940_20', 'MIN1970_20': 'MIN1970_20', 'SUMA_1940_': 'SUMA_1940_', 'SUMA1940_2': 'SUMA1940_2', 'SUMA1970_2': 'SUMA1970_2', 'I40_70': 'I40_70', 'i40_24': 'i40_24', 'i70_24': 'i70_24', 'WSP_1940_2': 'WSP_1940_2', 'WSP_1940_1': 'WSP_1940_1', 'WSP_1999_2': 'WSP_1999_2', 'JA_1940': 'JA_1940', 'JA_1999': 'JA_1999', 'JA_2024': 'JA_2024', 'OBJECTID': 'OBJECTID', 'GRID_ID_1': 'GRID_ID_1', 'AREA': 'AREA', 'PERCENTAGE': 'PERCENTAGE', 'OBJECTID_1': 'OBJECTID_1', 'GRID_ID_12': 'GRID_ID_12', 'AREA_1': 'AREA_1', 'PERCENTA_1': 'PERCENTA_1', 'OBJECTID_2': 'OBJECTID_2', 'GRID_ID_13': 'GRID_ID_13', 'AREA_12': 'AREA_12', 'PERCENTA_2': 'PERCENTA_2', });
lyr_wskaznik_ksztaltu_1940_5.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GRID_ID': 'GRID_ID', 'i1940': 'i1940', 'i1970': 'i1970', 'i2024': 'i2024', 'MIN1940_19': 'MIN1940_19', 'MIN1940_20': 'MIN1940_20', 'MIN1970_20': 'MIN1970_20', 'SUMA_1940_': 'SUMA_1940_', 'SUMA1940_2': 'SUMA1940_2', 'SUMA1970_2': 'SUMA1970_2', 'I40_70': 'I40_70', 'i40_24': 'i40_24', 'i70_24': 'i70_24', 'WSP_1940_2': 'WSP_1940_2', 'WSP_1940_1': 'WSP_1940_1', 'WSP_1999_2': 'WSP_1999_2', 'JA_1940': 'JA_1940', 'JA_1999': 'JA_1999', 'JA_2024': 'JA_2024', 'OBJECTID': 'OBJECTID', 'GRID_ID_1': 'GRID_ID_1', 'AREA': 'AREA', 'PERCENTAGE': 'PERCENTAGE', 'OBJECTID_1': 'OBJECTID_1', 'GRID_ID_12': 'GRID_ID_12', 'AREA_1': 'AREA_1', 'PERCENTA_1': 'PERCENTA_1', 'OBJECTID_2': 'OBJECTID_2', 'GRID_ID_13': 'GRID_ID_13', 'AREA_12': 'AREA_12', 'PERCENTA_2': 'PERCENTA_2', });
lyr_rzeka_1940_6.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_rzeka_1999_7.set('fieldAliases', {'Id': 'Id', });
lyr_rzeka_2024_8.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_rzeka_conajmniej1_9.set('fieldAliases', {'Id': 'Id', });
lyr_rzeka_kiedykolwiek_10.set('fieldAliases', {'FID_rzeka_': 'FID_rzeka_', 'FID_HYDRO_': 'FID_HYDRO_', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'FID_caly_b': 'FID_caly_b', 'Id_1': 'Id_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_indeks_jaccarda_1999_2024_0.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GRID_ID': 'TextEdit', 'i1940': 'TextEdit', 'i1970': 'TextEdit', 'i2024': 'TextEdit', 'MIN1940_19': 'TextEdit', 'MIN1940_20': 'TextEdit', 'MIN1970_20': 'TextEdit', 'SUMA_1940_': 'TextEdit', 'SUMA1940_2': 'TextEdit', 'SUMA1970_2': 'TextEdit', 'I40_70': 'TextEdit', 'i40_24': 'TextEdit', 'i70_24': 'TextEdit', 'WSP_1940_2': 'TextEdit', 'WSP_1940_1': 'TextEdit', 'WSP_1999_2': 'TextEdit', 'JA_1940': 'TextEdit', 'JA_1999': 'TextEdit', 'JA_2024': 'TextEdit', 'OBJECTID': 'Range', 'GRID_ID_1': 'TextEdit', 'AREA': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'OBJECTID_1': 'Range', 'GRID_ID_12': 'TextEdit', 'AREA_1': 'TextEdit', 'PERCENTA_1': 'TextEdit', 'OBJECTID_2': 'Range', 'GRID_ID_13': 'TextEdit', 'AREA_12': 'TextEdit', 'PERCENTA_2': 'TextEdit', });
lyr_indeks_jaccarda_1940_1999_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GRID_ID': 'TextEdit', 'i1940': 'TextEdit', 'i1970': 'TextEdit', 'i2024': 'TextEdit', 'MIN1940_19': 'TextEdit', 'MIN1940_20': 'TextEdit', 'MIN1970_20': 'TextEdit', 'SUMA_1940_': 'TextEdit', 'SUMA1940_2': 'TextEdit', 'SUMA1970_2': 'TextEdit', 'I40_70': 'TextEdit', 'i40_24': 'TextEdit', 'i70_24': 'TextEdit', 'WSP_1940_2': 'TextEdit', 'WSP_1940_1': 'TextEdit', 'WSP_1999_2': 'TextEdit', 'JA_1940': 'TextEdit', 'JA_1999': 'TextEdit', 'JA_2024': 'TextEdit', 'OBJECTID': 'Range', 'GRID_ID_1': 'TextEdit', 'AREA': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'OBJECTID_1': 'Range', 'GRID_ID_12': 'TextEdit', 'AREA_1': 'TextEdit', 'PERCENTA_1': 'TextEdit', 'OBJECTID_2': 'Range', 'GRID_ID_13': 'TextEdit', 'AREA_12': 'TextEdit', 'PERCENTA_2': 'TextEdit', });
lyr_indeks_jaccarda_1940_2024_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GRID_ID': 'TextEdit', 'i1940': 'TextEdit', 'i1970': 'TextEdit', 'i2024': 'TextEdit', 'MIN1940_19': 'TextEdit', 'MIN1940_20': 'TextEdit', 'MIN1970_20': 'TextEdit', 'SUMA_1940_': 'TextEdit', 'SUMA1940_2': 'TextEdit', 'SUMA1970_2': 'TextEdit', 'I40_70': 'TextEdit', 'i40_24': 'TextEdit', 'i70_24': 'TextEdit', 'WSP_1940_2': 'TextEdit', 'WSP_1940_1': 'TextEdit', 'WSP_1999_2': 'TextEdit', 'JA_1940': 'TextEdit', 'JA_1999': 'TextEdit', 'JA_2024': 'TextEdit', 'OBJECTID': 'Range', 'GRID_ID_1': 'TextEdit', 'AREA': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'OBJECTID_1': 'Range', 'GRID_ID_12': 'TextEdit', 'AREA_1': 'TextEdit', 'PERCENTA_1': 'TextEdit', 'OBJECTID_2': 'Range', 'GRID_ID_13': 'TextEdit', 'AREA_12': 'TextEdit', 'PERCENTA_2': 'TextEdit', });
lyr_wskaznik_ksztaltu_2024_3.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GRID_ID': 'TextEdit', 'i1940': 'TextEdit', 'i1970': 'TextEdit', 'i2024': 'TextEdit', 'MIN1940_19': 'TextEdit', 'MIN1940_20': 'TextEdit', 'MIN1970_20': 'TextEdit', 'SUMA_1940_': 'TextEdit', 'SUMA1940_2': 'TextEdit', 'SUMA1970_2': 'TextEdit', 'I40_70': 'TextEdit', 'i40_24': 'TextEdit', 'i70_24': 'TextEdit', 'WSP_1940_2': 'TextEdit', 'WSP_1940_1': 'TextEdit', 'WSP_1999_2': 'TextEdit', 'JA_1940': 'TextEdit', 'JA_1999': 'TextEdit', 'JA_2024': 'TextEdit', 'OBJECTID': 'Range', 'GRID_ID_1': 'TextEdit', 'AREA': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'OBJECTID_1': 'Range', 'GRID_ID_12': 'TextEdit', 'AREA_1': 'TextEdit', 'PERCENTA_1': 'TextEdit', 'OBJECTID_2': 'Range', 'GRID_ID_13': 'TextEdit', 'AREA_12': 'TextEdit', 'PERCENTA_2': 'TextEdit', });
lyr_wskaznik_ksztaltu_1999_4.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GRID_ID': 'TextEdit', 'i1940': 'TextEdit', 'i1970': 'TextEdit', 'i2024': 'TextEdit', 'MIN1940_19': 'TextEdit', 'MIN1940_20': 'TextEdit', 'MIN1970_20': 'TextEdit', 'SUMA_1940_': 'TextEdit', 'SUMA1940_2': 'TextEdit', 'SUMA1970_2': 'TextEdit', 'I40_70': 'TextEdit', 'i40_24': 'TextEdit', 'i70_24': 'TextEdit', 'WSP_1940_2': 'TextEdit', 'WSP_1940_1': 'TextEdit', 'WSP_1999_2': 'TextEdit', 'JA_1940': 'TextEdit', 'JA_1999': 'TextEdit', 'JA_2024': 'TextEdit', 'OBJECTID': 'Range', 'GRID_ID_1': 'TextEdit', 'AREA': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'OBJECTID_1': 'Range', 'GRID_ID_12': 'TextEdit', 'AREA_1': 'TextEdit', 'PERCENTA_1': 'TextEdit', 'OBJECTID_2': 'Range', 'GRID_ID_13': 'TextEdit', 'AREA_12': 'TextEdit', 'PERCENTA_2': 'TextEdit', });
lyr_wskaznik_ksztaltu_1940_5.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GRID_ID': 'TextEdit', 'i1940': 'TextEdit', 'i1970': 'TextEdit', 'i2024': 'TextEdit', 'MIN1940_19': 'TextEdit', 'MIN1940_20': 'TextEdit', 'MIN1970_20': 'TextEdit', 'SUMA_1940_': 'TextEdit', 'SUMA1940_2': 'TextEdit', 'SUMA1970_2': 'TextEdit', 'I40_70': 'TextEdit', 'i40_24': 'TextEdit', 'i70_24': 'TextEdit', 'WSP_1940_2': 'TextEdit', 'WSP_1940_1': 'TextEdit', 'WSP_1999_2': 'TextEdit', 'JA_1940': 'TextEdit', 'JA_1999': 'TextEdit', 'JA_2024': 'TextEdit', 'OBJECTID': 'Range', 'GRID_ID_1': 'TextEdit', 'AREA': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'OBJECTID_1': 'Range', 'GRID_ID_12': 'TextEdit', 'AREA_1': 'TextEdit', 'PERCENTA_1': 'TextEdit', 'OBJECTID_2': 'Range', 'GRID_ID_13': 'TextEdit', 'AREA_12': 'TextEdit', 'PERCENTA_2': 'TextEdit', });
lyr_rzeka_1940_6.set('fieldImages', {'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_rzeka_1999_7.set('fieldImages', {'Id': 'Range', });
lyr_rzeka_2024_8.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_rzeka_conajmniej1_9.set('fieldImages', {'Id': 'Range', });
lyr_rzeka_kiedykolwiek_10.set('fieldImages', {'FID_rzeka_': 'TextEdit', 'FID_HYDRO_': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'FID_caly_b': 'TextEdit', 'Id_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_indeks_jaccarda_1999_2024_0.set('fieldLabels', {'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'GRID_ID': 'inline label - always visible', 'i1940': 'inline label - always visible', 'i1970': 'inline label - always visible', 'i2024': 'inline label - always visible', 'MIN1940_19': 'inline label - always visible', 'MIN1940_20': 'inline label - always visible', 'MIN1970_20': 'inline label - always visible', 'SUMA_1940_': 'inline label - always visible', 'SUMA1940_2': 'inline label - always visible', 'SUMA1970_2': 'inline label - always visible', 'I40_70': 'inline label - always visible', 'i40_24': 'inline label - always visible', 'i70_24': 'inline label - always visible', 'WSP_1940_2': 'inline label - always visible', 'WSP_1940_1': 'inline label - always visible', 'WSP_1999_2': 'inline label - always visible', 'JA_1940': 'inline label - always visible', 'JA_1999': 'inline label - always visible', 'JA_2024': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'GRID_ID_1': 'inline label - always visible', 'AREA': 'inline label - always visible', 'PERCENTAGE': 'inline label - always visible', 'OBJECTID_1': 'inline label - always visible', 'GRID_ID_12': 'inline label - always visible', 'AREA_1': 'inline label - always visible', 'PERCENTA_1': 'inline label - always visible', 'OBJECTID_2': 'inline label - always visible', 'GRID_ID_13': 'inline label - always visible', 'AREA_12': 'inline label - always visible', 'PERCENTA_2': 'inline label - always visible', });
lyr_indeks_jaccarda_1940_1999_1.set('fieldLabels', {'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'GRID_ID': 'inline label - always visible', 'i1940': 'inline label - always visible', 'i1970': 'inline label - always visible', 'i2024': 'inline label - always visible', 'MIN1940_19': 'inline label - always visible', 'MIN1940_20': 'inline label - always visible', 'MIN1970_20': 'inline label - always visible', 'SUMA_1940_': 'inline label - always visible', 'SUMA1940_2': 'inline label - always visible', 'SUMA1970_2': 'inline label - always visible', 'I40_70': 'inline label - always visible', 'i40_24': 'inline label - always visible', 'i70_24': 'inline label - always visible', 'WSP_1940_2': 'inline label - always visible', 'WSP_1940_1': 'inline label - always visible', 'WSP_1999_2': 'inline label - always visible', 'JA_1940': 'inline label - always visible', 'JA_1999': 'inline label - always visible', 'JA_2024': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'GRID_ID_1': 'inline label - always visible', 'AREA': 'inline label - always visible', 'PERCENTAGE': 'inline label - always visible', 'OBJECTID_1': 'inline label - always visible', 'GRID_ID_12': 'inline label - always visible', 'AREA_1': 'inline label - always visible', 'PERCENTA_1': 'inline label - always visible', 'OBJECTID_2': 'inline label - always visible', 'GRID_ID_13': 'inline label - always visible', 'AREA_12': 'inline label - always visible', 'PERCENTA_2': 'inline label - always visible', });
lyr_indeks_jaccarda_1940_2024_2.set('fieldLabels', {'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'GRID_ID': 'inline label - always visible', 'i1940': 'inline label - always visible', 'i1970': 'inline label - always visible', 'i2024': 'inline label - always visible', 'MIN1940_19': 'inline label - always visible', 'MIN1940_20': 'inline label - always visible', 'MIN1970_20': 'inline label - always visible', 'SUMA_1940_': 'inline label - always visible', 'SUMA1940_2': 'inline label - always visible', 'SUMA1970_2': 'inline label - always visible', 'I40_70': 'inline label - always visible', 'i40_24': 'inline label - always visible', 'i70_24': 'inline label - always visible', 'WSP_1940_2': 'inline label - always visible', 'WSP_1940_1': 'inline label - always visible', 'WSP_1999_2': 'inline label - always visible', 'JA_1940': 'inline label - always visible', 'JA_1999': 'inline label - always visible', 'JA_2024': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'GRID_ID_1': 'inline label - always visible', 'AREA': 'inline label - always visible', 'PERCENTAGE': 'inline label - always visible', 'OBJECTID_1': 'inline label - always visible', 'GRID_ID_12': 'inline label - always visible', 'AREA_1': 'inline label - always visible', 'PERCENTA_1': 'inline label - always visible', 'OBJECTID_2': 'inline label - always visible', 'GRID_ID_13': 'inline label - always visible', 'AREA_12': 'inline label - always visible', 'PERCENTA_2': 'inline label - always visible', });
lyr_wskaznik_ksztaltu_2024_3.set('fieldLabels', {'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'GRID_ID': 'inline label - always visible', 'i1940': 'inline label - always visible', 'i1970': 'inline label - always visible', 'i2024': 'inline label - always visible', 'MIN1940_19': 'inline label - always visible', 'MIN1940_20': 'inline label - always visible', 'MIN1970_20': 'inline label - always visible', 'SUMA_1940_': 'inline label - always visible', 'SUMA1940_2': 'inline label - always visible', 'SUMA1970_2': 'inline label - always visible', 'I40_70': 'inline label - always visible', 'i40_24': 'inline label - always visible', 'i70_24': 'inline label - always visible', 'WSP_1940_2': 'inline label - always visible', 'WSP_1940_1': 'inline label - always visible', 'WSP_1999_2': 'inline label - always visible', 'JA_1940': 'inline label - always visible', 'JA_1999': 'inline label - always visible', 'JA_2024': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'GRID_ID_1': 'inline label - always visible', 'AREA': 'inline label - always visible', 'PERCENTAGE': 'inline label - always visible', 'OBJECTID_1': 'inline label - always visible', 'GRID_ID_12': 'inline label - always visible', 'AREA_1': 'inline label - always visible', 'PERCENTA_1': 'inline label - always visible', 'OBJECTID_2': 'inline label - always visible', 'GRID_ID_13': 'inline label - always visible', 'AREA_12': 'inline label - always visible', 'PERCENTA_2': 'inline label - always visible', });
lyr_wskaznik_ksztaltu_1999_4.set('fieldLabels', {'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'GRID_ID': 'inline label - always visible', 'i1940': 'inline label - always visible', 'i1970': 'inline label - always visible', 'i2024': 'inline label - always visible', 'MIN1940_19': 'inline label - always visible', 'MIN1940_20': 'inline label - always visible', 'MIN1970_20': 'inline label - always visible', 'SUMA_1940_': 'inline label - always visible', 'SUMA1940_2': 'inline label - always visible', 'SUMA1970_2': 'inline label - always visible', 'I40_70': 'inline label - always visible', 'i40_24': 'inline label - always visible', 'i70_24': 'inline label - always visible', 'WSP_1940_2': 'inline label - always visible', 'WSP_1940_1': 'inline label - always visible', 'WSP_1999_2': 'inline label - always visible', 'JA_1940': 'inline label - always visible', 'JA_1999': 'inline label - always visible', 'JA_2024': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'GRID_ID_1': 'inline label - always visible', 'AREA': 'inline label - always visible', 'PERCENTAGE': 'inline label - always visible', 'OBJECTID_1': 'inline label - always visible', 'GRID_ID_12': 'inline label - always visible', 'AREA_1': 'inline label - always visible', 'PERCENTA_1': 'inline label - always visible', 'OBJECTID_2': 'inline label - always visible', 'GRID_ID_13': 'inline label - always visible', 'AREA_12': 'inline label - visible with data', 'PERCENTA_2': 'inline label - visible with data', });
lyr_wskaznik_ksztaltu_1940_5.set('fieldLabels', {'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'GRID_ID': 'inline label - always visible', 'i1940': 'inline label - always visible', 'i1970': 'inline label - always visible', 'i2024': 'inline label - always visible', 'MIN1940_19': 'inline label - always visible', 'MIN1940_20': 'inline label - always visible', 'MIN1970_20': 'inline label - always visible', 'SUMA_1940_': 'inline label - always visible', 'SUMA1940_2': 'inline label - always visible', 'SUMA1970_2': 'inline label - always visible', 'I40_70': 'inline label - always visible', 'i40_24': 'inline label - always visible', 'i70_24': 'inline label - always visible', 'WSP_1940_2': 'inline label - always visible', 'WSP_1940_1': 'inline label - always visible', 'WSP_1999_2': 'inline label - always visible', 'JA_1940': 'inline label - always visible', 'JA_1999': 'inline label - always visible', 'JA_2024': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'GRID_ID_1': 'inline label - always visible', 'AREA': 'inline label - always visible', 'PERCENTAGE': 'inline label - always visible', 'OBJECTID_1': 'inline label - always visible', 'GRID_ID_12': 'inline label - always visible', 'AREA_1': 'inline label - always visible', 'PERCENTA_1': 'inline label - always visible', 'OBJECTID_2': 'inline label - always visible', 'GRID_ID_13': 'inline label - always visible', 'AREA_12': 'inline label - always visible', 'PERCENTA_2': 'inline label - always visible', });
lyr_rzeka_1940_6.set('fieldLabels', {'Id': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_rzeka_1999_7.set('fieldLabels', {'Id': 'inline label - always visible', });
lyr_rzeka_2024_8.set('fieldLabels', {'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_rzeka_conajmniej1_9.set('fieldLabels', {'Id': 'inline label - always visible', });
lyr_rzeka_kiedykolwiek_10.set('fieldLabels', {'FID_rzeka_': 'inline label - always visible', 'FID_HYDRO_': 'inline label - always visible', 'DLUG_BRZEG': 'inline label - always visible', 'DLUGOSC': 'inline label - always visible', 'DOKLADNOSC': 'inline label - always visible', 'DOSTEPNOSC': 'inline label - always visible', 'GLEBOKOSC': 'inline label - always visible', 'ISTNIENIE': 'inline label - always visible', 'KAT_HYDRO': 'inline label - always visible', 'KAT_PLYWU': 'inline label - always visible', 'KAT_POJEMN': 'inline label - always visible', 'KAT_POLOZ': 'inline label - always visible', 'KAT_WODY': 'inline label - always visible', 'NAJW_WYS': 'inline label - always visible', 'NAZWA': 'inline label - always visible', 'OBIEKT': 'inline label - always visible', 'OPR_UPUST': 'inline label - always visible', 'OPR_ZBURZ': 'inline label - always visible', 'POCH_HYDRO': 'inline label - always visible', 'PRED_PRZEP': 'inline label - always visible', 'SREDNIA_GL': 'inline label - always visible', 'STAT_EKSPL': 'inline label - always visible', 'SZEROKOSC': 'inline label - always visible', 'TAJNOSC': 'inline label - always visible', 'TYP_AKWED': 'inline label - always visible', 'TYP_WYBRZ': 'inline label - always visible', 'ZN_ORIENT': 'inline label - always visible', 'POWIERZCHN': 'inline label - always visible', 'ID': 'inline label - always visible', 'FID_caly_b': 'inline label - always visible', 'Id_1': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Le_1': 'inline label - always visible', 'Shape_Le_2': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_rzeka_kiedykolwiek_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});