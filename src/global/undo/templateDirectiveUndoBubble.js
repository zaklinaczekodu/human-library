const templateDirectiveUndoBubble =
`<span class="alert alert-success undo-bubble__border">
  {{ vm.bubble.message|translate }}
  <a class="undo-bubble__undo" ng-show="vm.bubble.undo" href ng-click="vm.bubble.undo()">
    {{ 'undoBubble.undo'|translate }}
  </a>
  <button type="button" class="close undo-bubble__close" ng-click="vm.bubble.dismiss()">&times;</button>
</span>`;

export default templateDirectiveUndoBubble;