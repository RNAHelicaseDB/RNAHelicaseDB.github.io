//
//  note to futyre self (or whoevers gonna work on this in the future):
//  BEWARE!!
//  This is exteremely raw and brute-force approach.
//  0 elegancy in coding whatsoever, but it does the job.
//  what this does is, basically designate binary code to each column.
//  (00000 means nothing is being searched, 11111 means every column is being searched, 10001, means first and last column are being searched, etc..)
//  and basically treat each and every binary states (2^5 states) separately.
//  adding new column means additional power added to the binary states (2^6, 64 states)....
//  but I'm just gonna do it this way because this will work and probably take less time for me to learn javascript.
//
//
$(document).ready(function () {
    $("#speciesFilter, #groupFilter, #proteinFilter, #localizationFilter, #bprocessFilter").on("keyup change", function () {
        var species = $('#speciesFilter').find("option:selected").val();
        var group = $('#groupFilter').val();
        var protein = $('#proteinFilter').val();
        var localization = $('#localizationFilter').val();
        var bprocess = $('#bprocessFilter').val();
        SearchData(species, group, protein, localization, bprocess)
    });
});
function SearchData(species, group, protein, localization, bprocess) {
    // 00000
    if (species == 'all' && group == '' && protein == '' && localization == '' && bprocess == '') {
        $('#helicasedb tbody tr').show();
    }
    else {
        $('#helicasedb tbody tr:has(td)').each(function () {
            var rowSpecies = $.trim($(this).find('td:nth-child(1)').text());
            var rowGroup = $.trim($(this).find('td:nth-child(2)').text());
            var rowProtein = $.trim($(this).find('td:nth-child(3)').text());
            var rowLocalization = $.trim($(this).find('td:nth-child(4)').text());
            var rowBProcess = $.trim($(this).find('td:nth-child(5)').text());

            // 10000
            if (species != 'all' && group.toUpperCase() == '' && protein.toUpperCase() == '' && localization.toUpperCase() == '' && bprocess.toUpperCase() == '') {
              if (rowSpecies.toUpperCase().indexOf(species.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 01000
            else if (species == 'all' && group.toUpperCase() != '' && protein.toUpperCase() == '' && localization.toUpperCase() == '' && bprocess.toUpperCase() == '') {
              if (rowGroup.toUpperCase().indexOf(group.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 00100
            else if (species == 'all' && group.toUpperCase() == '' && protein.toUpperCase() != '' && localization.toUpperCase() == '' && bprocess.toUpperCase() == '') {
              if (rowProtein.toUpperCase().indexOf(protein.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 00010
            else if (species == 'all' && group.toUpperCase() == '' && protein.toUpperCase() == '' && localization.toUpperCase() != '' && bprocess.toUpperCase() == '') {
              if (rowLocalization.toUpperCase().indexOf(localization.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 00001
            else if (species == 'all' && group.toUpperCase() == '' && protein.toUpperCase() == '' && localization.toUpperCase() == '' && bprocess.toUpperCase() != '') {
              if (rowBProcess.toUpperCase().indexOf(bprocess.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 10001
            else if (species != 'all' && group.toUpperCase() == '' && protein.toUpperCase() == '' && localization.toUpperCase() == '' && bprocess.toUpperCase() != '') {
              if (rowSpecies.toUpperCase().indexOf(species.toUpperCase()) != -1 && rowBProcess.toUpperCase().indexOf(bprocess.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 10010
            else if (species != 'all' && group.toUpperCase() == '' && protein.toUpperCase() == '' && localization.toUpperCase() != '' && bprocess.toUpperCase() == '') {
              if (rowSpecies.toUpperCase().indexOf(species.toUpperCase()) != -1 && rowLocalization.toUpperCase().indexOf(localization.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 10011
            else if (species != 'all' && group.toUpperCase() == '' && protein.toUpperCase() == '' && localization.toUpperCase() != '' && bprocess.toUpperCase() != '') {
              if (rowSpecies.toUpperCase().indexOf(species.toUpperCase()) != -1 && rowLocalization.toUpperCase().indexOf(localization.toUpperCase()) != -1 && rowBProcess.toUpperCase().indexOf(bprocess.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 10100
            else if (species != 'all' && group.toUpperCase() == '' && protein.toUpperCase() != '' && localization.toUpperCase() == '' && bprocess.toUpperCase() == '') {
              if (rowSpecies.toUpperCase().indexOf(species.toUpperCase()) != -1 && rowProtein.toUpperCase().indexOf(protein.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 10101
            else if (species != 'all' && group.toUpperCase() == '' && protein.toUpperCase() != '' && localization.toUpperCase() == '' && bprocess.toUpperCase() != '') {
              if (rowSpecies.toUpperCase().indexOf(species.toUpperCase()) != -1 && rowProtein.toUpperCase().indexOf(protein.toUpperCase()) != -1 && rowBProcess.toUpperCase().indexOf(bprocess.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 10110
            else if (species != 'all' && group.toUpperCase() == '' && protein.toUpperCase() != '' && localization.toUpperCase() != '' && bprocess.toUpperCase() == '') {
              if (rowSpecies.toUpperCase().indexOf(species.toUpperCase()) != -1 && rowProtein.toUpperCase().indexOf(protein.toUpperCase()) != -1 && rowLocalization.toUpperCase().indexOf(localization.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 10111
            else if (species != 'all' && group.toUpperCase() == '' && protein.toUpperCase() != '' && localization.toUpperCase() != '' && bprocess.toUpperCase() != '') {
              if (rowSpecies.toUpperCase().indexOf(species.toUpperCase()) != -1 && rowProtein.toUpperCase().indexOf(protein.toUpperCase()) != -1 && rowLocalization.toUpperCase().indexOf(localization.toUpperCase()) != -1 && rowBProcess.toUpperCase().indexOf(bprocess.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 11000
            else if (species != 'all' && group.toUpperCase() != '' && protein.toUpperCase() == '' && localization.toUpperCase() == '' && bprocess.toUpperCase() == '') {
              if (rowSpecies.toUpperCase().indexOf(species.toUpperCase()) != -1 && rowGroup.toUpperCase().indexOf(group.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 11001
            else if (species != 'all' && group.toUpperCase() != '' && protein.toUpperCase() == '' && localization.toUpperCase() == '' && bprocess.toUpperCase() != '') {
              if (rowSpecies.toUpperCase().indexOf(species.toUpperCase()) != -1 && rowGroup.toUpperCase().indexOf(group.toUpperCase()) != -1 && rowBProcess.toUpperCase().indexOf(bprocess.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 11010
            else if (species != 'all' && group.toUpperCase() != '' && protein.toUpperCase() == '' && localization.toUpperCase() != '' && bprocess.toUpperCase() == '') {
              if (rowSpecies.toUpperCase().indexOf(species.toUpperCase()) != -1 && rowGroup.toUpperCase().indexOf(group.toUpperCase()) != -1 && rowLocalization.toUpperCase().indexOf(localization.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 11011
            else if (species != 'all' && group.toUpperCase() != '' && protein.toUpperCase() == '' && localization.toUpperCase() != '' && bprocess.toUpperCase() != '') {
              if (rowSpecies.toUpperCase().indexOf(species.toUpperCase()) != -1 && rowGroup.toUpperCase().indexOf(group.toUpperCase()) != -1 && rowLocalization.toUpperCase().indexOf(localization.toUpperCase()) != -1 && rowBProcess.toUpperCase().indexOf(bprocess.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 11100
            else if (species != 'all' && group.toUpperCase() != '' && protein.toUpperCase() != '' && localization.toUpperCase() == '' && bprocess.toUpperCase() == '') {
              if (rowSpecies.toUpperCase().indexOf(species.toUpperCase()) != -1 && rowGroup.toUpperCase().indexOf(group.toUpperCase()) != -1 && rowProtein.toUpperCase().indexOf(protein.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 11101
            else if (species != 'all' && group.toUpperCase() != '' && protein.toUpperCase() != '' && localization.toUpperCase() == '' && bprocess.toUpperCase() != '') {
              if (rowSpecies.toUpperCase().indexOf(species.toUpperCase()) != -1 && rowGroup.toUpperCase().indexOf(group.toUpperCase()) != -1 && rowProtein.toUpperCase().indexOf(protein.toUpperCase()) != -1 && rowBProcess.toUpperCase().indexOf(bprocess.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 11110
            else if (species != 'all' && group.toUpperCase() != '' && protein.toUpperCase() != '' && localization.toUpperCase() != '' && bprocess.toUpperCase() == '') {
              if (rowSpecies.toUpperCase().indexOf(species.toUpperCase()) != -1 && rowGroup.toUpperCase().indexOf(group.toUpperCase()) != -1 && rowProtein.toUpperCase().indexOf(protein.toUpperCase()) != -1 && rowLocalization.toUpperCase().indexOf(localization.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 11111
            else if (species != 'all' && group.toUpperCase() != '' && protein.toUpperCase() != '' && localization.toUpperCase() != '' && bprocess.toUpperCase() != '') {
              if (rowSpecies.toUpperCase().indexOf(species.toUpperCase()) != -1 && rowGroup.toUpperCase().indexOf(group.toUpperCase()) != -1 && rowProtein.toUpperCase().indexOf(protein.toUpperCase()) != -1 && rowLocalization.toUpperCase().indexOf(localization.toUpperCase()) != -1 && rowBProcess.toUpperCase().indexOf(bprocess.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 01001
            else if (species == 'all' && group.toUpperCase() != '' && protein.toUpperCase() == '' && localization.toUpperCase() == '' && bprocess.toUpperCase() != '') {
              if (rowGroup.toUpperCase().indexOf(group.toUpperCase()) != -1 && rowBProcess.toUpperCase().indexOf(bprocess.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 01010
            else if (species == 'all' && group.toUpperCase() != '' && protein.toUpperCase() == '' && localization.toUpperCase() != '' && bprocess.toUpperCase() == '') {
              if (rowGroup.toUpperCase().indexOf(group.toUpperCase()) != -1 && rowLocalization.toUpperCase().indexOf(localization.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 01011
            else if (species == 'all' && group.toUpperCase() != '' && protein.toUpperCase() == '' && localization.toUpperCase() != '' && bprocess.toUpperCase() != '') {
              if (rowGroup.toUpperCase().indexOf(group.toUpperCase()) != -1 && rowLocalization.toUpperCase().indexOf(localization.toUpperCase()) != -1 && rowBProcess.toUpperCase().indexOf(bprocess.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 01100
            else if (species == 'all' && group.toUpperCase() != '' && protein.toUpperCase() != '' && localization.toUpperCase() == '' && bprocess.toUpperCase() == '') {
              if (rowGroup.toUpperCase().indexOf(group.toUpperCase()) != -1 && rowProtein.toUpperCase().indexOf(protein.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 01101
            else if (species == 'all' && group.toUpperCase() != '' && protein.toUpperCase() != '' && localization.toUpperCase() == '' && bprocess.toUpperCase() != '') {
              if (rowGroup.toUpperCase().indexOf(group.toUpperCase()) != -1 && rowProtein.toUpperCase().indexOf(protein.toUpperCase()) != -1 && rowBProcess.toUpperCase().indexOf(bprocess.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 01110
            else if (species == 'all' && group.toUpperCase() != '' && protein.toUpperCase() != '' && localization.toUpperCase() != '' && bprocess.toUpperCase() == '') {
              if (rowGroup.toUpperCase().indexOf(group.toUpperCase()) != -1 && rowProtein.toUpperCase().indexOf(protein.toUpperCase()) != -1 && rowLocalization.toUpperCase().indexOf(localization.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 01111
            else if (species == 'all' && group.toUpperCase() != '' && protein.toUpperCase() != '' && localization.toUpperCase() != '' && bprocess.toUpperCase() != '') {
              if (rowGroup.toUpperCase().indexOf(group.toUpperCase()) != -1 && rowProtein.toUpperCase().indexOf(protein.toUpperCase()) != -1 && rowLocalization.toUpperCase().indexOf(localization.toUpperCase()) != -1 && rowBProcess.toUpperCase().indexOf(bprocess.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 00101
            else if (species == 'all' && group.toUpperCase() == '' && protein.toUpperCase() != '' && localization.toUpperCase() == '' && bprocess.toUpperCase() != '') {
              if (rowProtein.toUpperCase().indexOf(protein.toUpperCase()) != -1 && rowBProcess.toUpperCase().indexOf(bprocess.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 00110
            else if (species == 'all' && group.toUpperCase() == '' && protein.toUpperCase() != '' && localization.toUpperCase() != '' && bprocess.toUpperCase() == '') {
              if (rowProtein.toUpperCase().indexOf(protein.toUpperCase()) != -1 && rowLocalization.toUpperCase().indexOf(localization.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 00111
            else if (species == 'all' && group.toUpperCase() == '' && protein.toUpperCase() != '' && localization.toUpperCase() != '' && bprocess.toUpperCase() != '') {
              if (rowProtein.toUpperCase().indexOf(protein.toUpperCase()) != -1 && rowLocalization.toUpperCase().indexOf(localization.toUpperCase()) != -1 && rowBProcess.toUpperCase().indexOf(bprocess.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
            // 00011
            else if (species == 'all' && group.toUpperCase() == '' && protein.toUpperCase() == '' && localization.toUpperCase() != '' && bprocess.toUpperCase() != '') {
              if (rowLocalization.toUpperCase().indexOf(localization.toUpperCase()) != -1 && rowBProcess.toUpperCase().indexOf(bprocess.toUpperCase()) != -1) {
                  $(this).show();
              } else {
                  $(this).hide();
              }
            }
        });
    }
}
