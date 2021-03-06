const directiveAvailableHumanBooksTemplate =
`<nav id="hl-navbar" class="navbar navbar--hl navbar-default navbar-fixed-top" role="navigation">
  <div class="container">

    <span class="navbar-brand pull-right">
      <img class="hl-navbar--logo" ng-src="{{$root.baseUrl}}src/_assets/pictures/logo.svg" alt="logo">{{ 'mainMenu.header'|translate }}
    </span>

    <h1 class="top-bar__header">{{ 'available.header'|translate }}</h1>

  </div>
</nav>

<div class="container">
  <h3>{{ 'available.humanBooks.helpHeader'|translate }}</h3>
</div>

<available-human-books-cards class="available-human-books-cards">
  <available-human-book-card class="available-human-book-card animate"
                             ng-repeat="humanBook in library.books|filter:onlyAvailable">
    <div class="panel panel-default hl-panel">
      <div class="panel-heading">
        <h2 class="panel-title heading-with-button-sm">
          {{ humanBook.name }}
        </h2>
      </div>
      <div class="panel-body">
        {{ humanBook.title }}
      </div>
    </div>
  </available-human-book-card>
</available-human-books-cards>`;

export default directiveAvailableHumanBooksTemplate;