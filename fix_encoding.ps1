$path = "C:\Users\borja\Downloads\Proyecto 2\lexfamilia\app.js"
$content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)

$correcciones = @{
    "LÃ³gica" = "Lógica";
    "ðŸš€" = "??";
    "Ãšltimos" = "Últimos";
    "tÃ©rmino" = "término";
    "ðŸ“‘" = "??";
    "PRÃ CTICA" = "PRÁCTICA";
    "ExplicaciÃ³n" = "Explicación";
    "JurÃ­dica" = "Jurídica";
    "Siguiente" = "Siguiente";
    "âž¡ï¸ " = "?";
    "âœ“" = "?";
    "Â¡" = "¡";
    "Â¿" = "¿";
    "ðŸ”„" = "??";
    "âœ…" = "?";
    "â¬…ï¸ " = "?"
}

foreach ($key in $correcciones.Keys) {
    if ($content.Contains($key)) {
        $content = $content.Replace($key, $correcciones[$key])
    }
}

[System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
