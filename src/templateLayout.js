const templateLayout =
`<top-bar>

  <undo-bubble class="undo-bubble"></undo-bubble>

  <ul class="nav navbar-nav navbar-right">
    <li>
      <button class="btn btn-default navbar-btn" title="{{ 'mainMenu.admitBook'|translate }}" ng-click="admitBook()">
        <i class="glyphicon glyphicon-plus"></i>
      </button>
    </li>
    <li>
      <button class="btn btn-default navbar-btn" type="button" ng-click="vm.toggleReadersMonitorWindow()" title="{{ 'mainMenu.showAvailable'|translate }}">
        <i class="glyphicon glyphicon-new-window"></i>
      </button>
    </li>
    <li>
      <button class="btn btn-default navbar-btn" ng-click="newEdition()" title="{{ 'mainMenu.startNewEdition'|translate }}">
        <i class="glyphicon glyphicon-trash"></i>
      </button>
    </li>
    <li>
      <a class="btn btn-default navbar-btn" ng-href="{{libraryExportUrl}}" download="human-library-edition-{{library.startDate|date:'yyyy-M-d'}}.json" title="{{ 'mainMenu.exportLibrary'|translate }}">
        <i class="glyphicon glyphicon-save"></i>
      </a>
    </li>
    <li>
      <button class="btn btn-default navbar-btn" title="{{ 'mainMenu.importLibrary'|translate }}" hl-file-input-wrapper hl-import-library="library">
        <i class="glyphicon glyphicon-open"></i>
      </button>
    </li>
    <li>
      <hl-change-language></hl-change-language>
    </li>
  </ul>

</top-bar>

<div class="human-books">

  <human-books-cards class="human-books__cards"></human-books-cards>

  <footer class="human-books__footer">
    <div class="container">
      <div class="row">
        <div class="col-xs-6 text-muted">
          <p>
            {{ 'footer.madeBy'|translate }}
            <a href="https://github.com/zaklinaczekodu" target="_blank">{{ 'footer.zaklinaczeKodu'|translate }}</a>&nbsp;&nbsp;&nbsp;
            <a href="https://github.com/zaklinaczekodu/human-library/issues" target="_blank">{{ 'footer.file'|translate }}</a>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 text-muted">
          <img src="src/_assets/pictures/hajs.svg" class="pull-left human-books__hajs">Program do obsługi Żywych Bibliotek w Polsce został stworzony w ramach projektu
          <br>“Rozwój Żywych Bibliotek w Polsce - przeciwdziałajmy dyskryminacji lokalnie”.
          <br>Sfinansowano ze środków Programu "Obywatele dla Demokracji" z Funduszy EOG.
        </div>
      </div>
    </div>
  </footer>

</div>

<ui-view></ui-view>`;

export default templateLayout;