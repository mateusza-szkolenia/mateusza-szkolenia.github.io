# Usuwanie polityk bezpieczeństwa w ImageMagick

Plik `ImageMagick-6/policy.xml`

Umieścić w komentarzu:

```xml
<policymap>
  <!-- in order to avoid to get image with password text -->
  <policy domain="path" rights="none" pattern="@*"/>
  <!-- disable ghostscript format types -->
  <!--
  <policy domain="coder" rights="none" pattern="PS" />
  <policy domain="coder" rights="none" pattern="PS2" />
  <policy domain="coder" rights="none" pattern="PS3" />
  <policy domain="coder" rights="none" pattern="EPS" />
  <policy domain="coder" rights="none" pattern="PDF" />
  <policy domain="coder" rights="none" pattern="XPS" />
  -->
</policymap>
```
