function ReadPacket()
{
	// Code
packet.Log("Obtenu apr�s avoir utilis� une emote");
packet.ReadInt("Unk1");
packet.ReadByte("Unk2");
packet.ReadLong("Unk3");
}

ReadPacket();