var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_union_italie_0 = new ol.format.GeoJSON();
var features_union_italie_0 = format_union_italie_0.readFeatures(json_union_italie_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_union_italie_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_union_italie_0.addFeatures(features_union_italie_0);var lyr_union_italie_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_union_italie_0, 
                style: style_union_italie_0,
                title: '<img src="styles/legend/union_italie_0.png" /> union_italie'
            });

lyr_union_italie_0.setVisible(true);
var layersList = [baseLayer,lyr_union_italie_0];
lyr_union_italie_0.set('fieldAliases', {'LEVL_CODE': 'LEVL_CODE', 'NUTS_ID': 'NUTS_ID', 'CNTR_CODE': 'CNTR_CODE', 'NUTS_NAME': 'NUTS_NAME', 'VGC_2015': 'VGC_2015', 'VGC_2016': 'VGC_2016', 'VGC_2017': 'VGC_2017', 'VGC_2018': 'VGC_2018', 'VGC_2012': 'VGC_2012', 'VGC_2013': 'VGC_2013', 'VGC_2014': 'VGC_2014', 'Mixresi18': 'Mixresi18', 'SupMix2018': 'SupMix2018', 'ProdMix18': 'ProdMix18', 'RW2018': 'RW2018', 'DirectGWP': 'DirectGWP', 'MP_RenewT': 'MP_RenewT', 'MP_CO2': 'MP_CO2', 'MP_RW': 'MP_RW', 'MR_RENEWT': 'MR_RENEWT', 'MR_RW': 'MR_RW', 'MR_CO2': 'MR_CO2', 'EmpreinteC': 'EmpreinteC', });
lyr_union_italie_0.set('fieldImages', {'LEVL_CODE': 'TextEdit', 'NUTS_ID': 'TextEdit', 'CNTR_CODE': 'TextEdit', 'NUTS_NAME': 'TextEdit', 'VGC_2015': 'TextEdit', 'VGC_2016': 'TextEdit', 'VGC_2017': 'TextEdit', 'VGC_2018': 'TextEdit', 'VGC_2012': 'TextEdit', 'VGC_2013': 'TextEdit', 'VGC_2014': 'TextEdit', 'Mixresi18': 'TextEdit', 'SupMix2018': 'TextEdit', 'ProdMix18': 'TextEdit', 'RW2018': 'TextEdit', 'DirectGWP': 'TextEdit', 'MP_RenewT': 'TextEdit', 'MP_CO2': 'TextEdit', 'MP_RW': 'TextEdit', 'MR_RENEWT': 'TextEdit', 'MR_RW': 'TextEdit', 'MR_CO2': 'TextEdit', 'EmpreinteC': 'TextEdit', });
lyr_union_italie_0.set('fieldLabels', {'LEVL_CODE': 'no label', 'NUTS_ID': 'header label', 'CNTR_CODE': 'no label', 'NUTS_NAME': 'no label', 'VGC_2015': 'no label', 'VGC_2016': 'no label', 'VGC_2017': 'no label', 'VGC_2018': 'no label', 'VGC_2012': 'no label', 'VGC_2013': 'no label', 'VGC_2014': 'no label', 'Mixresi18': 'no label', 'SupMix2018': 'no label', 'ProdMix18': 'no label', 'RW2018': 'no label', 'DirectGWP': 'no label', 'MP_RenewT': 'no label', 'MP_CO2': 'no label', 'MP_RW': 'no label', 'MR_RENEWT': 'no label', 'MR_RW': 'no label', 'MR_CO2': 'no label', 'EmpreinteC': 'no label', });
lyr_union_italie_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});