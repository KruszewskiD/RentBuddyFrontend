import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  FlatList,
} from "react-native";

interface DropdownProps {
  options: string[]; // Lista opcji
  value: string; // Aktualnie wybrana opcja
  setValue: (value: string) => void; // Funkcja do ustawiania wybranej opcji
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, setValue }) => {
  const [visible, setVisible] = useState(false); // Czy lista rozwijana jest widoczna

  const handleSelect = (item: string) => {
    setValue(item); // Przekaż wybraną opcję do zewnętrznego stanu
    setVisible(false); // Zamknij modal
  };

  return (
    <View>
      {/* Przycisk otwierający listę */}
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setVisible(true)}
      >
        <Text>{value || "Wybierz opcję"}</Text>
      </TouchableOpacity>

      {/* Modal z listą opcji */}
      <Modal visible={visible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => handleSelect(item)}
                >
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            {/* Przycisk zamykający modal */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setVisible(false)}
            >
              <Text style={styles.closeButtonText}>Zamknij</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    width: 300,
    alignItems: "center",
    elevation: 5,
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    width: "100%",
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
    color: "black",
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "red",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Dropdown;
