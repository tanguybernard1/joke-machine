class CreateJokes < ActiveRecord::Migration[6.0]
  def change
    create_table :jokes do |t|
      t.text :body, null: false
      t.text :answer

      t.timestamps
    end
  end
end
