command = input("Enter a command: ")
if command == "?":
	print("Here is a list of avaliable commands:")
	print("status, user_password, .txt_logs")
if command == "status":
	print("status: alive")
if command == "user_password":
	print("user_password: M4NT15")
if command == ".txt_logs":
	print("null")
else:
	print("INVALID COMMAND. TRY AGAIN.")
