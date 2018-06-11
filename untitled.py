# def sum(node1, node2):
# 	if node1 is None:
# 		return node2

# 	if node2 is None:
# 		return node1

# 	result = None
# 	end_of_result = None

# 	carry = 0
# 	while node1 is not None and node2 is not None:
# 		temp_sum = node1.val + node2.val + carry
# 		carry = temp_sum/10
# 		temp_digit = temp_sum % 10

# 		if result is None:
# 			result = LinkedListNode(temp_digit)
# 			end_of_result = result
# 		else:
# 			end_of_result.next = LinkedListNode(temp_digit)
# 			end_of_result = end_of_result.next


# 	if node1 is None and node2 is None:
# 		return result
	
# 	if node1 is None:
# 		longer_list = node2
# 	else:
# 		longer_list = node1

# 	for x in longer_list:
# 		temp_sum = x.val + carry
# 		carry = temp_sum/10
# 		temp_digit = temp_sum % 10
# 		end_of_result.next = LinkedListNode(temp_digit)
# 		end_of_result = end_of_result.next

# 	if carry != 0:
# 		end_of_result.next = LinkedListNode(carry)
# 		end_of_result = end_of_result.next

# 	return result






def length(node):
	count = 0
	while node is not None:
		count += 1
		node = node.next

def adjust(node, diff):
	head = LinkedListNode(0)
	curr = head
	for x in xrange(diff-1):
		curr.next = LinkedListNode(0)
		curr = curr.next

	curr.next = node
	return head

def addOnDigit(s):
	temp_sum = s.val
	s.val = temp_sum%10
	carry = s.val/10
	temp_sum = node1.val + node2.val + carry
	return_val = LinkedListNode(temp_sum)
	return_val.next = s

def recursiveAdd(node1, node2):
	if node1.next is None: # also implies node2.next is None
		return LinkedListNode(node1.val + node2.val)

	s = recursiveAdd(node1.next, node2.next)

	return_val = addOnDigit(s)

	return return_val


def sum(node1, node2):
	count1 = length(node1)
	count2 = length(node2)

	diff = abs(count1-count2)

	if count1 > count2:
		node2 = adjust(node2, diff)
	elif count1 < count2:
		node1 = adjust(node1, diff)

	s = recursiveAdd(node1, node2)

	return_val = addOnDigit(s)

	return return_val
















































