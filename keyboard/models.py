from django.db import models

class MIDIFile(models.Model):
    name = models.CharField(max_length=255, verbose_name="FileName")
    content = models.FileField(upload_to='midi_files/', verbose_name="Content")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="CreationTime")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "MIDIファイル"
        verbose_name_plural = "MIDIファイル"