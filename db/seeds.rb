# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

org_names = []
10.times do
  org_names << { name: FFaker::Education.school	} 
end

orgs = Organization.create(org_names)

orgs.each do |org|
  puts "For #{org.name} with id #{org.id}"
  10.times do 
    team = Team.create(name: "#{FFaker::Sport.name} #{FFaker::Education.school_name}", organization: org )
    puts "Adding this team #{team.name}"
  end
end
