import smbus
import sys
from .module import Module

class Io(Module):
		def __init__(self):
			super().__init__()
			super().setAddress(11)


		def sync(self):
			super().checkOnline()

			if(super().getOnline()):
				
				try: 
					i2c = smbus.SMBus(1)
					state = i2c.read_word_data(super().getAddress(), 1)
					state = state + i2c_rea_byte(supeer().getAddress)
					file = open("/tmp/i2c_" + str(super().getAddress()) + "_in", "w")
					file.write(str(state))
					file.close()

				except IOError:
					super().setOnline(False)
					super().setSetup(False)
					return

				try:
					i2c = smbus.SMBus(1)
					file = open("/tmp/i2c_" + str(super().getAddress()) + "_in", "w")
					i2c.write_byte(super().getAddress(), state)
					file.close()

				except IOError:
					super().setOnline(False)
					super().setSetup(False)

