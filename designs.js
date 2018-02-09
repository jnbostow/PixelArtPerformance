$(document).ready(function() {

  $('input[type="submit"]').click(function(e) {
    e.preventDefault();

    const height = $('#grid-selector input[name="height"]').val();
    const width = $('#grid-selector input[name="width"]').val();
    let color = 0;
    const table = $('table.grid');



    //remove existing grid
    table.children().remove();

    /**
     * @description updates the table to add the rows and cells based on user input in form
     * @param {number} height - height of grid
     * @param {number} width - width of grid
     * @param {object} table - DOM element that will be used for grid
    */
    function makeGrid(height, width, table) {
      let tr = 0;

      for (let row=height; row > 0; row--) {
        table.append(document.createElement('tr'));
        tr = $('table tr').last();
        for (let cell=width; cell > 0; cell--) {
          tr.append(document.createElement('td'));
        }
      }
    }

    makeGrid(height, width, table);

    //click event listener on all the table cells to add selected color
    table.on('click','td', function() {
      color = $('input[name="color"]').val();
      $(this).css('background-color',color);
    });

  });
});
