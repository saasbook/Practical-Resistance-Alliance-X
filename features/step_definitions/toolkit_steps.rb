Given /the following toolkits exist/ do |toolkits_table|
  toolkits_table.hashes.each do |movie|
    # each returned element will be a hash whose key is the table header.
    # you should arrange to add that movie to the database here.
    Toolkit.create!(movie)
  end
end