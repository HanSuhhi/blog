module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-recommended-vue", "stylelint-config-clean-order"],
  plugins: ["stylelint-declaration-block-no-ignored-properties"],
  "rules": {
    "plugin/declaration-block-no-ignored-properties": true,
    "custom-property-pattern": "^([a-z_][a-z0-9]*)(-[a-z0-9]+)*$",
    "no-descending-specificity": null,
    "selector-class-pattern": '^[a-z]([-]?[a-z0-9]+)*(_[a-z0-9]([-]?[a-z0-9]+)*)?(-[a-z0-9]([-]?[a-z0-9]+)*)?$'
  }
};
